export const state = () => ({
  displayName: null,
  email: null,
  userUid: null
});

export const mutations = {
  SET_USER(state, { displayName, email, userUid }) {
    state.displayName = displayName;
    state.email = email;
    state.userUid = userUid;
  }
};

export const getters = {
  getUser(state) {
    return state.displayName;
  }
};

export const actions = {
  async googleSignIn({ commit, state }) {
    let provider = new this.$firebase.auth.GoogleAuthProvider();
    return this.$auth
      .setPersistence(this.$firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        this.$auth.signInWithRedirect(provider);
      });
  },
  async googleGetRedirectResult({ commit, dispatch }) {
    return this.$auth
      .getRedirectResult()
      .then(function(result) {
        const user = result.user;
        if (user != null) {
          commit('SET_USER', {
            displayName: user.displayName,
            email: user.email,
            userUid: user.uid
          });
          if (result.additionalUserInfo.isNewUser) {
            dispatch('registerUserToDB', {
              displayName: user.displayName,
              email: user.email,
              userUid: user.uid
            });
          }
          return true;
        }
        console.log('failed result' + result);
        return false;
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        console.table({
          errorCode: errorCode,
          errorMessage: errorMessage,
          email: email,
          credential: credential
        });
        return false;
      });
  },
  async registerUserToDB(
    { commit },
    { userUid: userUid, displayName: displayName, email: email }
  ) {
    return this.$firestore
      .collection('users')
      .doc(userUid)
      .set({
        displayName: displayName,
        email: email,
        project: []
      })
      .catch(e => console.log(e));
  },
  async googleSignInCheck() {
    return this.$auth.onAuthStateChanged(user => {});
  },
  async googleSignOut() {
    return this.$auth
      .signOut()
      .then()
      .catch(e => console.log(e));
  }
};

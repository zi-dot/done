export const state = () => ({
  displayName: '',
  email: '',
  userUid: ''
});

export const mutations = {
  SET_USER(state, { displayName, email, userUid }) {
    state.displayName = displayName;
    state.email = email;
    state.userUid = userUid;
  },
  SIGN_OUT(state) {
    state.displayName = '';
    state.email = '';
    state.userUid = '';
  }
};

export const getters = {
  getDisplayName(state) {
    return state.displayName;
  },
  isAuthenticated(state) {
    return (
      state.displayName !== '' && state.email !== '' && state.userUid !== ''
    );
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
        let retObj = {
          success: true,
          user: null,
          isNewUser: false
        };
        if (user != null) {
          retObj.user = user;
          if (result.additionalUserInfo.isNewUser) {
            retObj.isNewUser = true;
            dispatch('registerUserToDB', {
              displayName: user.displayName,
              email: user.email,
              userUid: user.uid
            });
          }
          retObj.isNewUser = false;
        }
        return retObj;
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        return {
          success: false,
          isNewUser: false
        };
      });
  },
  async googleCheckLoggedIn({ commit }) {
    return new Promise((res, rej) => {
      this.$auth.onAuthStateChanged(function(user) {
        if (user) {
          commit('SET_USER', {
            displayName: user.displayName,
            email: user.email,
            userUid: user.uid
          });
        }
        res(user !== null);
      });
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
  async googleSignOut({ commit }) {
    return this.$auth
      .signOut()
      .then(r => {
        commit('SIGN_OUT');
        this.$router.push('/');
      })
      .catch(e => console.log(e));
  }
};

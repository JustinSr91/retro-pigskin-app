import React from 'react'
import { Link } from 'react-router'
import Header from './header'
import Footer from './footer'
import firebase from 'firebase'
import { fbSignInWithRedirect, fbSetupSignoutCallback, fbOnAuthStateChanged,
  fbUpdateUser, fbWhenUserUpdated} from './fbAuth'

export default React.createClass({
  getInitialState() {
    return {
      provider: () => {},
      user: {
        authed: false,
        name: '',
        email: '',
        picture: '',
        lastLogin: undefined
      },
    }
  },
  componentDidMount() {
    fbOnAuthStateChanged((authUser) => {
      if (authUser) { // Signed in successfully
        var signOutButton = document.querySelector("[data-js='nav__signOut']")
        if (signOutButton.className == "nav__signout--hide") {
          signOutButton.className = "nav__signOut";
        }
        var currentUser = {};
        var today = new Date();

        currentUser["/users/" + authUser.uid] = {
          name: authUser.displayName,
          email: authUser.email,
          picture: authUser.photoURL,
          lastLogin: today
        }

        fbUpdateUser(currentUser)

        fbWhenUserUpdated(authUser.uid, (snapshot) => {
          var snapshotReturn = snapshot.val()
          this.setState({
            user: {
              authed: true,
              name: snapshotReturn.name,
              email: snapshotReturn.email,
              picture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRScfj8VzfB-pB3jQxbn0NXS2qQy-D07gsplccAE4F_XK17i-9rdA',
              lastLogin: snapshotReturn.lastLogin
            }
          });
        });
    }
    else {
      console.log("LOGGED OUT")
    }
  })

  },
  signUserIn() {
    console.log("signUserIn");
    fbSignInWithRedirect()
  },
  signUserOut() {
    fbSetupSignoutCallback(() => {
      this.setState({
        user: {
          authed: false,
          name: '',
          email: '',
          picture: '',
          lastLogin: undefined
        }
      })
    })
  },
  render() {
    return (
      <section>
        <Header user={this.state.user}
                signUserIn={this.signUserIn}
                signUserOut={this.signUserOut}/>
        {this.props.children && React.cloneElement(this.props.children,
                  { user: this.state.user })}
        <Footer />
      </section>
    )
  }
})

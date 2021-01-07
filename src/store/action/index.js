import * as firebase from 'firebase';



const fbLogin = () => {

    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            localStorage.setItem('userName', user.displayName)
            localStorage.setItem('userPhoto', user.photoURL)
            localStorage.setItem('userMail', user.email)
            localStorage.setItem('login', 'true')
            firebase.database().ref(`/${localStorage.getItem('userName')}/`).push(localStorage.getItem('userMail'))
            dispatch({
                type: 'FBLOGIN',
                userPhoto: user.photoURL,
                userName: user.displayName,
                userMail: user.email
            })
        }).catch(function (err) {
            alert('Something went wrong! Please Check your Internet Connection')
        });

    }
}
const postAd = (a, b, c, d, e, f, g, i) => {
    let h = localStorage.getItem('userName')
    let j = localStorage.getItem('userMail')

    // words limit check

    var arrayedName = a.split('')
    var nameCount = arrayedName.length

    var arrayedDes = b.split('')
    var desCount = arrayedDes.length

    var arrayedPlace = e.split('')
    var placeCount = arrayedPlace.length

    var preUrlHttp = d.split('')
    var urlHttp = preUrlHttp[0] +preUrlHttp[1] +preUrlHttp[2] +preUrlHttp[3] 
    


    if (
        i < 100000000000 &&
        i > 3000000000 &&
        g != '' && 
        d != '' && 
        c > 10 && 
        c < 100000000 && 
        nameCount < 200 && 
        nameCount > 10 &&
        desCount < 250 && 
        desCount > 20 &&
        placeCount < 100 && 
        placeCount > 2 &&
        urlHttp == 'http'
        ) {
        document.getElementById('post-ad').style.display = 'none'
        document.getElementById('ad-error').style.display = 'none'
        document.getElementById('pending').style.display = 'block'
        window.scrollTo(0,0)
        
        var ad_data = {
            productName: a,
            productDescription: b,
            productPrice: c,
            productImageURL: d,
            productPlace: e,
            productDate: f,
            productCategory: g,
            sellerName: h,
            sellerPhone: i,
            sellerEmail: j,
        }
        var fullMail = localStorage.getItem('userMail')
        var accMail = fullMail.replace('.','-')
        

        
        firebase.database().ref(`/${localStorage.getItem('userName')}/pending-ads/`).push(ad_data)
        

    } else {
        document.getElementById('ad-error').style.display = 'block'
    }

    return (dispatch) => {
        dispatch({
            type: 'POSTAD'
        })
    }
}

export {
    fbLogin,
    postAd
}
const SHARE = document.querySelector('.share')
const SHARE_IMAGE = document.querySelector('.share__image')
const SOCIALMEDIA = document.querySelector('.socialMedia')

console.log(SHARE)

function toggleSocialMedia() {
	if(SOCIALMEDIA.classList[1] === 'isNoActive') {
		SOCIALMEDIA.classList.remove('isNoActive')
		SOCIALMEDIA.classList.add('isActive')
		SHARE.setAttribute("class", "share share--darker")
		SHARE_IMAGE.setAttribute("src", "./images/icon-share-white.svg")
	}else {
		SOCIALMEDIA.classList.remove('isActive')
		SOCIALMEDIA.classList.add('isNoActive')
		SHARE.setAttribute("class", "share")
		SHARE_IMAGE.setAttribute("src", "./images/icon-share.svg")
	}
}


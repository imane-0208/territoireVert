import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'


const PrivacyPolicy = () => {	
	useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
	<div className='privacy container'>
		<div className="logo-container">
			<img className='privacy-logo'  src="images/big-logo.png" alt="logo" />
		</div>
		<h1 className='title'>Politique de confidentialité</h1>
		<br />
		<h2>A propos de cette politique en matière de cookies</h2>
		<p>
		La présente politique en matière de cookies explique ce que sont les cookies et comment nous les utilisons, les types de cookies que nous utilisons, c’est-à-dire les informations que nous recueillons à l’aide des cookies et comment ces informations sont utilisées, et comment contrôler les préférences en matière de cookies. Pour plus d’informations sur la manière dont nous utilisons, stockons et sécurisons vos données personnelles, consultez notre politique de confidentialité. <br />
		Vous pouvez à tout moment modifier ou retirer votre consentement à la déclaration sur les cookies sur notre site web. <br />
		Pour en savoir plus sur qui nous sommes, comment vous pouvez nous contacter et comment nous traitons les données personnelles, consultez notre Politique de confidentialité. <br />
		
		</p>
		<br />
		<h2>Que sont les cookies ?</h2>
		<p>
		Les cookies sont de petits fichiers texte qui sont utilisés pour stocker de petits éléments d’information. Ils sont stockés sur votre appareil lorsque le site web est chargé sur votre navigateur. Ces cookies nous aident à faire fonctionner le site web correctement, à le rendre plus sûr, à fournir une meilleure expérience utilisateur et à comprendre comment le site web fonctionne et à analyser ce qui fonctionne et ce qui doit être amélioré.
		</p>
		<br />
		<h2>Comment utilisons-nous les cookies ?</h2>
		<p>
		Comme la plupart des services en ligne, notre site web utilise des cookies de première partie et de tierce partie à plusieurs fins. Les cookies de première partie sont principalement nécessaires au bon fonctionnement du site web et ne collectent aucune de vos données personnelles identifiables.Les cookies tiers utilisés sur notre site web servent principalement à comprendre comment le site web fonctionne, comment vous interagissez avec notre site web, à assurer la sécurité de nos services, à fournir des publicités qui vous sont pertinentes et, dans l’ensemble, à vous offrir une expérience utilisateur meilleure et améliorée et à accélérer vos interactions futures avec notre site web.
		</p>
		<br />
		<h2>Quels types de cookies utilisons-nous ?</h2>
		<p>
			<span>Essentiel :</span>Certains cookies sont essentiels pour que vous puissiez bénéficier de toutes les fonctionnalités de notre site. Ils nous permettent de maintenir les sessions des utilisateurs et de prévenir toute menace de sécurité. Ils ne collectent ni ne stockent aucune information personnelle. Par exemple, ces cookies vous permettent de vous connecter à votre compte et d’ajouter des produits à votre panier, et de passer à la caisse en toute sécurité.
		</p>
		<p>
			<span>Statistiques :</span>Ces cookies stockent des informations telles que le nombre de visiteurs du site web, le nombre de visiteurs uniques, les pages du site web qui ont été visitées, la source de la visite, etc. Ces données nous aident à comprendre et à analyser les performances du site web et les points à améliorer.
		</p>
		<p>
			<span>Marketing :</span>Notre site web affiche des publicités. Ces cookies sont utilisés pour personnaliser les publicités que nous vous montrons afin qu’elles soient significatives pour vous. Ces cookies nous aident également à suivre l’efficacité de ces campagnes publicitaires.Les informations stockées dans ces cookies peuvent également être utilisées par les fournisseurs de publicité tiers pour vous montrer des publicités sur d’autres sites web sur le navigateur également.
		</p>
		<p>
			<span>Fonctionnels :</span>Ce sont les cookies qui aident certaines fonctionnalités non essentielles sur notre site web. Ces fonctionnalités comprennent l’intégration de contenus tels que des vidéos ou le partage de contenus du site web sur des plateformes de médias sociaux.
		</p>
		<p>
			<span>Préférences :</span>Ces cookies nous aident à stocker vos paramètres et préférences de navigation, comme les préférences linguistiques, afin que vous ayez une expérience meilleure et efficace lors de vos prochaines visites sur le site web.
		</p>
		<br />
		<h2>Comment puis-je contrôler les préférences en matière de cookies ?</h2>
		<p>
		Si vous décidez de modifier vos préférences au cours de votre session de navigation, vous pouvez cliquer sur l’onglet “Politique en matière de confidentialité et de cookies” sur votre écran. L’avis de consentement s’affichera à nouveau, ce qui vous permettra de modifier vos préférences ou de retirer entièrement votre consentement.
		</p>
		<br />
		<p>
		En outre, les différents navigateurs offrent différentes méthodes pour bloquer et supprimer les cookies utilisés par les sites web. Vous pouvez modifier les paramètres de votre navigateur pour bloquer/supprimer les cookies. Pour en savoir plus sur la manière de gérer et de supprimer les cookies, consultez le site wikipedia.org, www.allaboutcookies.org
		</p>

		<div className="btn-container">
			<button className='back-home'>
			<Link className='link' to="/">Revenir sur la page d'accueil</Link>
			</button>
		</div>
	</div>
  )
}

export default PrivacyPolicy
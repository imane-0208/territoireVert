import React , {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'


const MentionLegal = () => {
  useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
    <div className='mention container'>
      <div className="logo-container">
			  <img className='privacy-logo'  src="images/big-logo.png" alt="logo" />
		  </div>
      <h2>1. Mentions légales</h2>
      <div className="table">
      <table>
          <tr>
            <th>Contact</th>
            <th>Hébergeur</th>
            <th>Éditeur</th>
          </tr>
          <tr>
            <td>
              <h4>Territoire Vert</h4>
              <p>technique@intelead.co</p>
            </td>
            <td>
              <h4>OVH Groupe SA,</h4> 
              Société immatriculée au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix.
            </td>
            <td>
              <span>GREENLEAD </span> <br />
              société par actions simplifiée, au capital social de 100 00 € et immatriculée sous 
              le SIREN 900696691, Située à PARIS (75018), elle est spécialisée dans le secteur d'activité de 
              l'ingénierie, études techniques
              Directeur de la publication M. Younes ROCHDI
              <br /> <br />
              Directeur de la publication M. Younes ROCHDI <br /> <br />
              
            </td>
          </tr>
          <br />
        </table>
      </div>
      <section>
        <h2>2. responsabilité</h2>
        <p>
          L’Utilisateur accède au site Territoirevert.com (ci-après « le Site) par l’intermédiaire des réseaux de communication de l’Internet. L’Utilisateur déclare en connaître les risques et les accepter. Il reconnaît notamment que les informations qui y transitent ou y sont stockées peuvent être interceptées ou altérées contre la volonté de Greenlead . Il relève de la responsabilité de l’Utilisateur de prendre toutes les précautions nécessaires afin de se prémunir contre les effets de la piraterie, notamment en adoptant une configuration informatique sécurisée et adaptée, par la mise en place d’un logiciel de détection de virus régulièrement mis à jour. Greenlead ne pourra en aucun cas être tenue pour responsable en cas de contamination du matériel informatique de l’Utilisateur au cours ou après la navigation de celui-ci sur le site Internet Territoirevert.com. De plus, Greenlead ne saurait être tenue pour responsable de la mauvaise utilisation des informations ou services par l’Utilisateur. Par ailleurs, Greenlead décline toute responsabilité relative à une quelconque décision prise par l’Utilisateur sur la base des seuls contenus publiés sur le site ou dans les réponses aux demandes de contact. En outre, Greenlead  veille à garantir l’exactitude des informations présentes sur son site. Néanmoins, il est expressément précisé que les informations traitées peuvent contenir des inexactitudes techniques ou typographiques, des omissions, etc. Il est précisé que Greenlead  ne peut en aucune façon être tenue pour responsable des erreurs éventuelles présentes sur son site, de la complétude des informations traitées, ni d’une absence de disponibilité des informations. En tout état de cause, la responsabilité de Greenlead ne saurait être recherchée en cas de conséquences ou de dommages, de toute nature, liés à la communication par l’Utilisateur à Greenlead  d’informations inexactes, incomplètes ou obsolètes Greenlead  remercie les Utilisateurs du présent site de lui faire part d’éventuelles omissions, erreurs ou corrections, en adressant un courrier électronique au webmestre du site à l’adresse suivante : [adresse de contact]. L’Utilisateur reconnaît que Greenlead se réserve le droit de modifier, d’interrompre temporairement ou de façon permanente tout ou partie du site, sans préavis. Greenlead  ne pourra voir sa responsabilité recherchée en cas d’indisponibilité temporaire, partielle ou totale du, du site notamment en cas de maintenance du site ou du serveur sur lequel il est hébergé, en cas d’incident technique et plus généralement en cas d’évènement extérieur à son contrôle.
        </p>
        <br />
        <h2>3. Protection des données à caractère personnel</h2>
        <p>
        La société Greenlead , au capital de 100 000 dhs Inscrite au de numéro de registre de commerce 426503 et dont le Siège social est situé à Angle Boulevard Emile ZOLA Et rue Rethel 11ème étage N29 – Casablanca, Maroc, est responsable de traitement pour les données personnelles (ci-après dénommées les « Données ») collectées auprès de l’Utilisateur du site internet Territoirevert.com (ci-après dénommé « l’Utilisateur »). <br />
        Les principales finalités des traitements effectués depuis le Site sont :
        Accès au site, à ses contenus et fonctionnalités,
        Traitement, gestion et suivi des demandes de contact et renseignements,
        Le suivi et traitement des candidatures dans le cadre d’opérations de recrutement (réception et étude des candidatures reçues en ligne, convocation des candidats, décision de refus ou d’embauche …) ;<br />
        la gestion des relations de Greenlead avec les Utilisateurs du site, et avec ses contacts (clients/prospects) de manière générale, en ce incluant les opérations de communication et de marketing (notamment segmentation, ciblage, prospection, newsletter) ; <br />
        L’amélioration et l’optimisation de la qualité et des fonctionnalités du site ;
        la réalisation et l’élaboration d’études, d’analyses, de reportings et de statistiques ; <br />
        la gestion des demandes éventuelles des utilisateurs visant à l’exercice de leurs droits en matière de protection des données à caractère personnel ; <br />
        le respect des obligations légales et réglementaires résultant notamment de l’activité de Greenlead. <br />
        Les finalités de ces traitements résultent principalement de l’intérêt légitime de Greenlead à suivre, gérer et organiser ses relations, notamment commerciales, avec les Utilisateurs du site et plus généralement avec ses contacts, et de l’organisation d’opérations de marketing et de communication de manière générale.
        </p>
        <br />
        <p>
        Les Données susceptibles d’être collectées peuvent être des données relatives à l’identité de l’Utilisateur, à ses coordonnées ou encore à son parcours étudiant et/ou professionnel.
        </p>
        <br />
        <p>
        Concernant les Données collectées dans le cadre d’un formulaire de contact, d’une inscription à un évènement organisé par Greenlead ou du téléchargement de documentation établie par Greenlead : les Données collectées sont nécessaires au traitement par le Groupe Greenlead de la demande de l’Utilisateur, la base légale de ce traitement est le consentement. Les Données collectées sont susceptibles d’être transférées à des sociétés appartenant à Greenlead, dont certaines sont situées hors de l’Union Européenne. Tout transfert de données hors de l’Union Européenne est encadré par des clauses contractuelles, rédigées selon le modèle adopté par la Commission européenne.
        </p>
        <br />
        <p>
        Au moment de la collecte des Données dans le cadre d’un formulaire de contact, d’une inscription à un évènement organisé par Greenlead ou du téléchargement de documentation établie par Greenlead, l’Utilisateur peut s’inscrire à la newsletter et ainsi choisir d’être informé à intervalle régulier des offres proposées sur le site internet. L’Utilisateur dispose à tout moment de la possibilité de retirer son consentement et se désabonner en cliquant sur le lien prévu à cet effet situé en bas de chacune des newsletters. Les Données sont conservées conformément aux dispositions légales et réglementaires en vigueur. <br />
        Concernant les Données collectées dans le cadre d’une candidature : les Données sont traitées dans le cadre de l’analyse de la candidature pour le poste auquel l’Utilisateur a postulé ou équivalent. Les Données collectées dans ce cadre sont susceptibles d’être transférées à des sociétés partenaire de Greenlead, situées en France.
        </p>
        <br />
        <p>
        De manière générale, les Données de l’Utilisateur sont conservées pendant la durée nécessaire à la réalisation des finalités susvisées, sous réserve des obligations de conservation de certaines données en application des dispositions légales ou réglementaires, et pour faire valoir, exercer et/ou défendre nos droits. (Par exemple : 13 mois pour vos données de connexion de navigation et de trafic, 2 ans maximum pour vos candidatures en ligne…).
        </p>
        <br />
        <p>
        Il est possible que lors de la visite de l’Utilisateur sur le Site, un ou plusieurs « cookie(s) » soit déposé(s) sur l’ordinateur de l’Utilisateur. Afin d’obtenir davantage d’informations à ce sujet, l’Utilisateur peut se référer à la page “Politique sur les cookies”.
        </p>
        <br />
        <p>
        Conformément à la règlementation sur la protection des données personnelles, l’Utilisateur peut exercer ses droits (accès, rectification, suppression, opposition, limitation et portabilité le cas échéant) en envoyant un email à technique@Greenlead.com. L’Utilisateur dispose par ailleurs, du droit d’introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL), notamment sur son site internet www.cnil.fr.
        </p>
        <br />
        <h2>4. droits de propriété intellectuelle</h2>
        <p>
        Le présent site Internet et tous les éléments qui le composent notamment les programmes, données, base de données, textes, images animées ou non, sons, dessins, graphismes etc. sont la propriété exclusive de Greenlead ou font l’objet d’une concession accordée à son profit. L’ensemble de ces éléments est soumis aux dispositions du Code de la propriété intellectuelle et, à ce titre, est protégé contre toute utilisation non autorisée par la loi ou la présente notice. La consultation de ce site n’emporte aucune licence, ni aucune cession des droits afférents aux éléments de ce site, sauf stipulation expresse figurant sur le site. Toute copie, reproduction, représentation, adaptation, diffusion, intégrale ou partielle du site Internet Territoirevert.com et de son contenu, par quelque procédé que ce soit et sur quelque support que ce soit est illicite, sauf accord préalable exprès et écrit du Directeur de la publication ou du titulaire des droits afférents à l’élément du site en cause. L’Utilisateur est autorisé à consulter, télécharger et imprimer les documents et informations disponibles aux conditions suivantes :
        </p>
        <br />
        <p>
        Les documents ne peuvent être utilisés qu’à titre personnel, pour information et dans un cadre strictement privé conformément à l’article L122–5 2° du code de la propriété intellectuelle. <br />
        Les documents et informations ne peuvent être modifiés de quelque manière que ce soit. <br />
        Les documents et informations ne peuvent être diffusés en dehors du site Internet.
        Les droits accordés à l’Utilisateur constituent une simple autorisation d’utilisation et en aucun cas une cession des droits de propriété intellectuelle afférents aux éléments du site. L’ensemble des signes distinctifs, logos et marques figurant sur le site sont la propriété de Greenlead et sont protégés par les dispositions du code de la propriété intellectuelle et du code civil relatives au droit des marques, au droit des dessins et modèles et à la responsabilité civile. Toute utilisation non autorisée des contenus ou informations du site, notamment à des fins d’exploitation commerciale, pourra faire l’objet de poursuites sur la base d’une action en contrefaçon et/ou d’une action en concurrence déloyale et/ou parasitisme de la part des titulaires des droits en cause.
        </p>
        <br />
        <h2>5. liens hypertextes</h2>
        <p>
        Greenlead se réserve la possibilité de mettre en place des liens sur son site internet, donnant accès à des pages web éditées par des tiers. L’Utilisateur est informé que la mise en place de ces liens ne signifie pas une approbation des contenus des dits sites.
        </p>
        <br />
        <p>
        Greenlead n’est pas responsable et ne peut donc garantir : <br />
        la fiabilité, la pertinence, la mise à jour, ou l’exhaustivité de leur contenu,
        leur accès et leur bon fonctionnement technique. <br />
        En cas de litige entre un site référencé sur le site et un Utilisateur, la responsabilité de Greenlead ne pourra être recherchée. Seule la responsabilité de l’éditeur du site référencé sur le site pourra être engagée.
        </p>
      </section>
      <div className="btn-container">
			<button className='back-home'>
				<Link className='link' to="/">Revenir sur la page d'accueil</Link>
			</button>
		</div>
    </div>
  )
}

export default MentionLegal
const
    articleMedia = document.getElementById('articleMedia')

const
    myJson = function() {
        const
            urlJSON = '/assets/Json/manganews.json',
            req = new XMLHttpRequest()

        req.open('GET', urlJSON)
        req.responseType = 'json'
        req.send()
        req.onload = function() {
            const
                articleMedia = req.response
            showArticle(articleMedia)
        }
        console.log(req)
    },
    showArticle = function(jsonObj) {
        const article = jsonObj
            // Boucle de récupération du Json pour l'affichage dans le html
        for (let i = 0; i < article.length; i++) {

            // Création de nouvelle élément

            const myArticle = document.createElement('article'),
                myTitle = document.createElement('h5'),
                myLink = document.createElement('a'),
                myImg = document.createElement('img'),
                myCard = document.createElement('div'),
                myCardBody = document.createElement('div');

            // Attribution de class
            const
                classCard = document.createAttribute("card"),
                classImg = document.createAttribute("img-fluid"),
                classColMd4 = document.createAttribute("col-md-4"),
                classCardBody = document.createAttribute("card");

            // Récupération des Clef / Valeur | (key / value)
            myTitle.textContent = article[i].title
            myLink.href = article[i].link
            myImg.src = article[i].img

            // Définition des class à utiliser
            classColMd4.value = "col-md-4"
            classImg.value = "bd-placeholder-img card-img-top"
            classCard.value = "card mb-4 text-center shadow-sm"
            classCardBody.value = "card-body"

            // Affichage des Elements avec leur variable (Parent => Enfant)
            articleMedia.appendChild(myArticle)
            myArticle.setAttributeNode(classColMd4)
            myArticle.appendChild(myCard)
            myCard.setAttributeNode(classCard)
            myCard.appendChild(myLink)
            myLink.appendChild(myImg)
            myImg.setAttributeNode(classImg)
            myCard.appendChild(myCardBody)
            myCardBody.setAttributeNode(classCardBody)
            myCardBody.appendChild(myTitle)
        }
    }
    /*
     * 
     * Execution des Functions
     * 
     */

myJson()
showArticle()
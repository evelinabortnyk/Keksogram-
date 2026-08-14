const descriotionsArr = [
    'Seizing the moment here and now',
    'Feeling the magic of the moment',
    'Living in the colors of the day',
    'A little sunshine within',
    'Home is where the heart is',
    'My little universe',
    'Happiness in simple things',
    'The atmosphere speaks for itself',
    'Lightness in every movement',
    'A day made for dreams',
]
const comments = [
    'Overall, it’s not bad. But not quite right.',
    'When taking a photo, it’s a good idea to keep your finger out of the frame. After all, it’s just unprofessional.',
    'My grandmother accidentally sneezed while holding the camera, and she got a better shot.',
    'I slipped on a banana peel, dropped the camera on the cat, and got a better shot.',
    'The people’s faces in the photo are contorted, as if they’re being beaten up. How could you capture such an unfortunate moment?',
]
const names = ['Marko', 'Sofia', 'Daniel', 'Alisa', 'Tymofii', 'Mia', 'Nazar', 'Emma', 'Artem', 'Lina', 'Illia', 'Victoria', 'Oleksii', 'Dasha', 'Kyrylo']

const hashtagsArr = ['#sunsetvibes', '#dailyinspo','#urbanexplorer','#mindfulmoments', '#techlife', '#creativeflow', '#weekendmood', '#natureescape', '#foodlover', '#goodtimesahead', '#simplepleasures', '#dreambigdaily', '#travelstories', '#staycurious', '#digitalworld', '#happyplace', '#livelifefully', '#cozycorner', '#newadventures', '#photodaily',]

let usersArr = []
function makeUsersArr(){
    const ID_RANGE ={
        min: 1, max: 25
    }
    for (let i= ID_RANGE.min; i <=ID_RANGE.max; i++) {
        const LIKES_RANGE ={
            min: 15, max: 2000,
        }
        let rand = getRandom(descriotionsArr.length)
        let likes = getRandom(LIKES_RANGE.max, LIKES_RANGE.min)

        let userObj = {
            'id': i, 'url': `photos/${i}.jpg`, 'description': descriotionsArr[rand], 'likes' : likes, 'comments' : makeCommentsArr(), 'hashtags': makeHashtagsarr(),
        }
        usersArr.push(userObj)
    }
    return usersArr
}

function makeHashtagsarr(){
    let arr = []
    for(let i=0; i<getRandom(5); i++){
        arr.push(hashtagsArr[getRandom(10)])
    }
    let uniqueArr=[...new Set(arr)]
    return uniqueArr.length<=5 ? uniqueArr : uniqueArr.slice(0, 5)
    
}

function makeCommentsArr(){
    let commentsArr = []
    let rand = getRandom(50)

    let arrId = []
    let uniqueId =[]
    for( let i=0; i<100; i++){
        let idRand = getRandom(200,1)
        arrId.push(idRand)
        uniqueId = [...new Set(arrId)];
        if(uniqueId.length == 15) break
    }
    for(let i=0; i<=rand; i++){
        let comment = {
            'id': uniqueId[i], 
            'avatar' : `img/avatar-${getRandom(6,1)}.svg`,
            'message' : comments[getRandom(comments.length)],
            'name' : names[getRandom(names.length)],
        }
        commentsArr.push(comment)
    }
    return commentsArr
}
function getRandom(max, min){
    return min ? Math.floor(Math.random() * (max - min + 1)) + min : Math.floor(Math.random() * max)
}

usersArr = makeUsersArr()

export default usersArr

// var elem= document.querySelectorAll('.elem')
// var btn= document.querySelectorAll('button')

// btn.forEach(function(elem){
//     elem.addEventListener('click',function(){
//         if(elem.innerHTML=="add friend"){
//             elem.innerHTML="remove friend"
//         }
//         else{
//             elem.innerHTML="Add Friend"
//         }
       
//     })
// })
const reels = [
  {
    username: "tech_guru",
    likeCount: 1200,
    isLiked: false,
    commentCount: 145,
    caption: "Coding is life! 💻🔥",
    video: "./vid1.mp4",
    userProfile: "images/user1.jpg",
    shareCount: 20,
    isFollowed: true
  },
  {
    username: "travel_vibes",
    likeCount: 5400,
    isLiked: true,
    commentCount: 780,
    caption: "Sunset vibes at the beach 🌅✨",
    video: "./vid2.mp4",
    userProfile: "images/user2.jpg",
    shareCount: 60,
    isFollowed: false
  },
  {
    username: "foodielife",
    likeCount: 2300,
    isLiked: false,
    commentCount: 310,
    caption: "Trying street food is a whole mood 😋",
    video: "./vid3.mp4",
    userProfile: "images/user3.jpg",
    shareCount: 33,
    isFollowed: true
  },
  {
    username: "gym_motivation",
    likeCount: 8900,
    isLiked: true,
    commentCount: 1120,
    caption: "No excuses. Only hard work 🏋️‍♂️🔥",
    video: "./vid4.mp4",
    userProfile: "images/user4.jpg",
    shareCount: 200,
    isFollowed: true
  },
  {
    username: "dance_with_me",
    likeCount: 4200,
    isLiked: false,
    commentCount: 530,
    caption: "New dance routine! 💃✨",
    video: "./vid5.mp4",
    userProfile: "images/user5.jpg",
    shareCount: 48,
    isFollowed: false
  },
  {
    username: "funny_memes",
    likeCount: 15000,
    isLiked: true,
    commentCount: 1900,
    caption: "Laughing is therapy 😂",
    video: "./vid2.mp4",
    userProfile: "images/user6.jpg",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "nature_snap",
    likeCount: 3800,
    isLiked: false,
    commentCount: 410,
    caption: "Nature's beauty hits different 🍃💧",
    video: "./vid1.mp4",
    userProfile: "images/user7.jpg",
    shareCount: 25,
    isFollowed: false
  },
  {
    username: "car_freak",
    likeCount: 9900,
    isLiked: true,
    commentCount: 1450,
    caption: "The beast is ready 🏎️💨",
    video: "./vid2.mp4",
    userProfile: "images/user8.jpg",
    shareCount: 150,
    isFollowed: true
  },
  {
    username: "music_lover",
    likeCount: 2700,
    isLiked: false,
    commentCount: 270,
    caption: "Only good vibes 🎧✨",
    video: "./vid1.mp4",
    userProfile: "images/user9.jpg",
    shareCount: 40,
    isFollowed: false
  },
  {
    username: "pet_world",
    likeCount: 7200,
    isLiked: true,
    commentCount: 860,
    caption: "Cutest dog you'll see today 🐶❤️",
    video: "./vid4.mp4",
    userProfile: "images/user10.jpg",
    shareCount: 110,
    isFollowed: true
  }
];
var sum=''
reels.forEach(function(elem){
    sum= sum + `<div class="reel">
                <video autoplay muted src="${elem.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src="https://images.unsplash.com/photo-1555666786-387db1852191?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxNTU0NTB8fGVufDB8fHx8fA%3D%3D" alt="">
                        <h4>harsh</h4>
                        <button>follow me </button>
                    </div>
                    <h3>e-commerce changes:adapting to the future</h3>
                </div>
                <div class="right">
                   <div class="like">
                    <h4 class="like-icon"><i class="ri-heart-3-line"></i></h4>
                    <h6>200</h6>
                   </div>
                   <div class="comment">
                    <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                    <h6>69</h6>
                   </div>
                   <div class="share">
                    <h4 class="share-icon"><i class="ri-share-forward-fill"></i></h4>
                    <h6>25</h6>
                   </div>
                </div>
            </div>`
})
 var allReels = document.querySelector('.all-reels')
    allReels.innerHTML = sum

const reels = [
  {
    username: "travel_with_ankit",
    likeCount: 12400,
    isLiked: false,
    commentCount: 340,
    caption: "Sunrise vibes in Bali 🌅✨",
    video: "./reels/1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=12",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "foodie_queen",
    likeCount: 9800,
    isLiked: true,
    commentCount: 150,
    caption: "The cheesiest pizza ever! 🍕🔥",
    video: "./reels/2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=32",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "fitness_guru",
    likeCount: 45000,
    isLiked: true,
    commentCount: 890,
    caption: "No excuses! Leg day motivation 💪",
    video: "./reels/3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=45",
    shareCount: 530,
    isFollowed: true
  },
  {
    username: "crazy_pet_world",
    likeCount: 72000,
    isLiked: false,
    commentCount: 2500,
    caption: "This dog is literally dancing 😂🐶",
    video: "./reels/1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=18",
    shareCount: 890,
    isFollowed: false
  },
  {
    username: "coding_with_rahul",
    likeCount: 3600,
    isLiked: true,
    commentCount: 110,
    caption: "JavaScript tip: Master the DOM like a pro 🔥",
    video: "./reels/4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=60",
    shareCount: 75,
    isFollowed: true
  },
  {
    username: "street_fashion",
    likeCount: 15500,
    isLiked: false,
    commentCount: 420,
    caption: "Delhi street style drip 😎🖤",
    video: "./reels/5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=28",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "luxury_rides",
    likeCount: 87000,
    isLiked: true,
    commentCount: 3100,
    caption: "This new BMW looks insane! 🚗🔥",
    video: "./reels/6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=40",
    shareCount: 1200,
    isFollowed: true
  },
  {
    username: "daily_motivation",
    likeCount: 22000,
    isLiked: false,
    commentCount: 680,
    caption: "Don't stop until you're proud. ✨",
    video: "./reels/7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 300,
    isFollowed: false
  },
  {
    username: "tech_explorer",
    likeCount: 31000,
    isLiked: false,
    commentCount: 950,
    caption: "Trying the latest foldable phone! 🤯📱",
    video: "./reels/8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=14",
    shareCount: 410,
    isFollowed: true
  },
  {
    username: "artistic_soul",
    likeCount: 5900,
    isLiked: true,
    commentCount: 260,
    caption: "Quick sketch of Iron Man! 🎨🔥",
    video: "./reels/3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 140,
    isFollowed: false
  }
];

let sum = '';

reels.forEach(function(elem){
    sum = sum + `<div class="single">
                <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?"Unfollow" : "Follow"}</button>
                        </div>
                        <div class="caption">
                            <p>${elem.caption}</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="like">
                        <h4 class="like-icon icon">${elem.isLiked? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                        <h5>${elem.likeCount}</h5>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                        <h5>${elem.commentCount}</h5>
                    </div>
                    <div class="share">
                        <h4 class="share-icon icon"><i class="ri-send-plane-line"></i></h4>
                        <h5>${elem.shareCount}</h5>
                    </div>
                    <div class="menu">
                        <h4 class="share-icon icon"><i class="ri-more-2-line"></i></h4>
                    </div>
                </div>
            </div>`;
    
});

let allReels = document.querySelector(".all-reels");

allReels.innerHTML = sum;


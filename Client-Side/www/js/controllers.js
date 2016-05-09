angular.module('starter.controllers', ['jett.ionic.filter.bar'])
  /**
   * @ngdoc Controllers
   * @name AppCtrl
   * @description
   *  Main controller that gets your current position
   */
  .controller('AppCtrl', function($scope, $timeout, $log) {
    var evening = [{
        "id": "0",
        "date": "April 8 | Friday",
        "date_compare": "08/04/2016",
        "title": "Bombay Jayashree Ramanath",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "img/E1.jpg",
        "image_large": "img/E1.jpg",
      }, {
        "id": "1",
        "date": "April 9 | Saturday",
        "date_compare": "09/04/2016",
        "title": "Sanjay Subramanyan",
        "artist": "S.Varadarajan (Violin) | Nanjil Arul (Mrundanga) | S.Venkataraman",
        "image_small": "img/E2.jpg",
        "image_large": "img/E2.jpg"
      }, {
        "id": "2",
        "date": "April 10 | Sunday",
        "date_compare": "10/04/2016",
        "title": "Dr.K.J.Yesudas",
        "artist": "Mahadeva Sarmas.R | Tiruvarur Bhakthavatsalam | T.Radhakrishnan",
        "image_small": "img/E3.jpg",
        "image_large": "img/E3.jpg"
      }, {
        "id": "3",
        "date": "April 11 | 5:15 PM Monday",
        "date_compare": "11/04/2016",
        "title": "Vignesh Iswar",
        "artist": "Apoorva Krishna | S.Ashok | Krishna prasad",
        "image_small": "img/E4-1.jpg",
        "image_large": "img/E4-1.jpg"
      }, {
        "id": "4",
        "date": "April 11 | 7:30 PM Monday",
        "date_compare": "11/04/2016",
        "title": "Sandeep Narayan",
        "artist": "Parur M S Ananthakrishnan | K.U.Jayachandra Rao | Srishaila",
        "image_small": "img/E4-2.jpg",
        "image_large": "img/E4-2.jpg"
      }, {
        "id": "5",
        "date": "April 12 | 5:15 PM Tuesday",
        "date_compare": "12/04/2016",
        "title": "Mysore N Kartik & Master Mysore M Sumanth",
        "artist": "",
        "image_small": "img/E5-1.jpg",
        "image_large": "img/E5-1.jpg"
      }, {
        "id": "6",
        "date": "April 12 | 7:30 PM Tuesday",
        "date_compare": "12/04/2016",
        "title": "Sriranjani Santhanagopalan",
        "artist": "Parur M S Ananthakrishnan | Tumkur Ravishankar | B.R.Ravi Kumar",
        "image_small": "img/E5-2.jpg",
        "image_large": "img/E5-2.jpg"
      }, {
        "id": "7",
        "date": "April 13 | 5:15 PM Wednesday",
        "date_compare": "13/04/2016",
        "title": "Saashwathi Prabhu & Party",
        "artist": "",
        "image_small": "img/E6-1.jpg",
        "image_large": "img/E6-1.jpg"
      }, {
        "id": "8",
        "date": "April 13 | 7:30 PM Wednesday",
        "date_compare": "13/04/2016",
        "title": "K.V.Krishana Prasad",
        "artist": "K.J.Dilip | K.U.Jayachandrarao | Srishaila",
        "image_small": "img/E6-2.jpg",
        "image_large": "img/E6-2.jpg"
      }, {
        "id": "9",
        "date": "April 14 | Thursday",
        "date_compare": "14/04/2016",
        "title": "Hyderabad Brothers (Raghavachary & Seshachary)",
        "artist": "Mysore Nagaraj | Hari Kumar | Alathur T Rajagane",
        "image_small": "img/E7.jpg",
        "image_large": "img/E7.jpg"
      }, {
        "id": "10",
        "date": "April 15 | 7:00 AM Friday",
        "date_compare": "15/04/2016",
        "title": "Sree Ramanavami",
        "artist": "Special Pooja to Lord Rama",
        "image_small": "img/E8-M.jpg",
        "image_large": "img/E8-M.jpg"
      }, {
        "id": "11",
        "date": "April 15 | Friday",
        "date_compare": "15/04/2016",
        "title": "Priya Sisters (Shanmugapriya & Haripriya)",
        "artist": "",
        "image_small": "img/E8.jpg",
        "image_large": "img/E8.jpg"
      }, {
        "id": "12",
        "date": "April 16 | 5:00 PM Saturday",
        "date_compare": "16/04/2016",
        "title": "Founder's Day",
        "artist": "Felicitation to Senior Artists",
        "image_small": "img/E9-M.jpg",
        "image_large": "img/E9-M.jpg"
      }, {
        "id": "13",
        "date": "April 16 | Saturday",
        "date_compare": "16/04/2016",
        "title": "RGK Dr.L.Subrarmaniam & Ambi Subrarmaniam (violin-duet)",
        "artist": "Embar S Kannan | J Vaidyanath | B S Purushotham",
        "image_small": "img/E9.jpg",
        "image_large": "img/E9.jpg"
      }, {
        "id": "14",
        "date": "April 17 | Sunday",
        "date_compare": "17/04/2016",
        "title": "T M Krishna",
        "artist": "",
        "image_small": "img/E10.jpg",
        "image_large": "img/E10.jpg"
      }, {
        "id": "15",
        "date": "April 18 5:30 | Monday",
        "date_compare": "18/04/2016",
        "title": "Madurai TNS Krishna",
        "artist": "H K Venkatram | Thiruvayur Bhaktavatsalam | Guruprasanna",
        "image_small": "img/E11-1.jpg",
        "image_large": "img/E11-1.jpg"
      }, {
        "id": "16",
        "date": "April 18 7:30 | Monday",
        "date_compare": "18/04/2016",
        "title": "Ustad Rais Balekhan & Ustad Hafiz balekhan (Sitar Duet)",
        "artist": "",
        "image_small": "img/E11-2.jpg",
        "image_large": "img/E11-2.jpg"
      }, {
        "id": "17",
        "date": "April 19 | Tuesday",
        "date_compare": "19/04/2016",
        "title": "Trichur Brothers (Srikrishna Mohan & Ramkumar Mohan)",
        "artist": "Mullaivasal G.Chandramouli | Trichur R.Mohan | Venkatasubramaniyam DV",
        "image_small": "img/E12.jpg",
        "image_large": "img/E12.jpg"
      }, {
        "id": "18",
        "date": "April 20 | Wednesday",
        "date_compare": "20/04/2016",
        "title": "Vidyabhushana",
        "artist": "Embar S Kannan | Dr.Umayalpuram K Sivaraman | Giridhar Udupa",
        "image_small": "img/E13.jpg",
        "image_large": "img/E13.jpg"
      }, {
        "id": "19",
        "date": "April 21 | Thursday",
        "date_compare": "21/04/2016",
        "title": "Vijay Siva N",
        "artist": "Charumathi Raghuraman | N.Manoj Siva | S.Krishna",
        "image_small": "img/E14.jpg",
        "image_large": "img/E14.jpg"
      }, {
        "id": "20",
        "date": "April 22 | Friday",
        "date_compare": "22/04/2016",
        "title": "Pravin Godkhindi (Bansuri) & Kumaresh Rajagopalan (Violin)",
        "artist": "V.Praveen | Raveendra Yavagal",
        "image_small": "img/E15.jpg",
        "image_large": "img/E15.jpg"
      }, {
        "id": "21",
        "date": "April 23 | Saturday",
        "date_compare": "23/04/2016",
        "title": "Malladi Brothers (Sriram & Ravi)",
        "artist": "Embar S.Kannan | K.V.Prasad | Giridhar Udupa",
        "image_small": "img/E16.jpg",
        "image_large": "img/E16.jpg"
      }, {
        "id": "22",
        "date": "April 24 | Sunday",
        "date_compare": "24/04/2016",
        "title": "Dr.Mysore Manjunath & Mandolin U Rajesh",
        "artist": "Dr.T.Bhaktavatsalam | Giridhar Udupa",
        "image_small": "img/E17.png",
        "image_large": "img/E17.png"
      }, {
        "id": "23",
        "date": "April 25 | Monday",
        "date_compare": "25/04/2016",
        "title": "Veena venu & Vidwan H K Venkatram",
        "artist": "Ashwin Anand | G Ravikiran",
        "image_small": "img/E18.jpg",
        "image_large": "img/E18.jpg"
      }, {
        "id": "24",
        "date": "April 26 | Tuesday",
        "date_compare": "26/04/2016",
        "title": "Anuradha Madhusudhan (Veena)",
        "artist": "Sri Tyagarajan | C Cheluvaraj | Raveendra Yavagal",
        "image_small": "img/E19.jpg",
        "image_large": "img/E19.jpg"
      }, {
        "id": "25",
        "date": "April 27 | Wednesday",
        "date_compare": "27/04/2016",
        "title": "Saketharaman",
        "artist": "Dr.Mysore Manjunath | V.Praveen | Giridhar Udupa",
        "image_small": "img/E20.jpg",
        "image_large": "img/E20.jpg"
      }, {
        "id": "26",
        "date": "April 28 | Thursday",
        "date_compare": "28/04/2016",
        "title": "Ramakrishnan Murthy",
        "artist": "B.U.Ganesh Prasad | V.Praveen | Guruprasanna",
        "image_small": "img/E21.jpg",
        "image_large": "img/E21.jpg"
      }, {
        "id": "27",
        "date": "April 29 | Friday",
        "date_compare": "29/04/2016",
        "title": "Shashank S",
        "artist": "B.U.Ganesh Prasad | Parupalli Phalgun | Guruprasanna",
        "image_small": "img/E22.jpg",
        "image_large": "img/E22.jpg"
      }, {
        "id": "28",
        "date": "April 30 | Saturday",
        "date_compare": "30/04/2016",
        "title": "Mysore Nagaraj & Dr.Mysore Manjunath",
        "artist": "Dr.Umayalpuram K Sivaraman | Amruth N",
        "image_small": "img/E23.jpg",
        "image_large": "img/E23.jpg"
      }, {
        "id": "29",
        "date": "May 1 | 6:00 PM Sunday",
        "date_compare": "1/05/2016",
        "title": "S.V.Narayanaswamy Rao Memorial National Award",
        "artist": "Presented to Dr Kadri Gopalnath",
        "image_small": "img/E24.jpg",
        "image_large": "img/E24.jpg"
      }, {
        "id": "30",
        "date": "May 2 | 10:00 AM Monday",
        "date_compare": "2/05/2016",
        "title": "Sree Rama Pattabhishekam",
        "artist": "Mysore Ramachandracharya & Party",
        "image_small": "img/E8-M.jpg",
        "image_large": "img/E8-M.jpg"
      }, {
        "id": "31",
        "date": "May 2 | Monday",
        "date_compare": "2/05/2016",
        "title": "Jayanthi Kumaresh",
        "artist": "Akkarai Subhalakshmi | Arjun Kumar | Trichy Krishna",
        "image_small": "img/E25.jpg",
        "image_large": "img/E25.jpg"
      }, {
        "id": "32",
        "date": "May 3 | Tuesday",
        "date_compare": "3/05/2016",
        "title": "Bangalore S.Shankar",
        "artist": "Charulatha Ramanujam | K.U.Jayachandra Rao | B.R.Ravikumar",
        "image_small": "img/E26.jpg",
        "image_large": "img/E26.jpg"
      }, {
        "id": "33",
        "date": "May 4 | Wednesday",
        "date_compare": "4/05/2016",
        "title": "M.S.sheela",
        "artist": "Nalina Mohan | H.S.Sudhindra | B.Rajashekar",
        "image_small": "img/E27.jpg",
        "image_large": "img/E27.jpg"
      }, {
        "id": "34",
        "date": "May 5 | Thursday",
        "date_compare": "5/05/2016",
        "title": "Sowmya.s",
        "artist": "Charulatha Ramanujam | H.S.Sudhindra | Giridhar Udupa",
        "image_small": "img/E28.jpg",
        "image_large": "img/E28.jpg"
      }, {
        "id": "35",
        "date": "May 6 | 5:00 PM Friday",
        "date_compare": "6/05/2016",
        "title": "Prathibakankshi Award Function",
        "artist": "Award Function",
        "image_small": "img/E8-M.jpg",
        "image_large": "img/E8-M.jpg"
      }, {
        "id": "36",
        "date": "May 6 | Friday",
        "date_compare": "6/05/2016",
        "title": "Unnikrishnan P",
        "artist": "Embar S.Kannan | Arjun Kumar | Amruth.N",
        "image_small": "img/E29.jpg",
        "image_large": "img/E29.jpg"
      }, {
        "id": "37",
        "date": "May 7 | 5:00 Saturday",
        "date_compare": "7/05/2016",
        "title": "Rama Gana Kalacharya Award to Smt Aruna Sairam",
        "artist": "",
        "image_small": "img/E30.jpg",
        "image_large": "img/E30.jpg"
      }, {
        "id": "38",
        "date": "May 7 | Saturday",
        "date_compare": "7/05/2016",
        "title": "Aruna Sairam",
        "artist": "",
        "image_small": "img/E30.jpg",
        "image_large": "img/E30.jpg"
      }, {
        "id": "39",
        "date": "May 8 | 10:00 AM Sunday",
        "date_compare": "8/05/2016",
        "title": "Vasanthotsava",
        "artist": "",
        "image_small": "img/E8-M.jpg",
        "image_large": "img/E8-M.jpg"
      }, {
        "id": "40",
        "date": "May 8 | Monday",
        "date_compare": "8/05/2016",
        "title": "Vishaka Hari & Party",
        "artist": "Discourse on : Ramabhakthi Samrajya",
        "image_small": "img/E31.jpg",
        "image_large": "img/E31.jpg"
      }];


      // window.localStorage['post'] = JSON.stringify(post);
  var junior = [{
      "id": "0",
      "date": "April 8 | Friday",
      "date_compare": "08/04/2016",
      "title": "Inauguration"
    },{
      "id": "1",
      "date": "April 9 | Saturday",
      "date_compare": "09/04/2016",
      "title": "Vani Rama Murthy"
    },{
      "id": "2",
      "date": "April 14 | Thursday",
      "date_compare": "14/04/2016",
      "title": "Sharath Rao"
    },{
      "id": "3",
      "date": "April 19 | Tuesday",
      "date_compare": "19/04/2016",
      "title": "Usha Manipal"
    },{
      "id": "4",
      "date": "April 20 | Wednesday",
      "date_compare": "20/04/2016",
      "title": "Lavanya Krishna Murthy"
    },{
      "id": "5",
      "date": "April 21 | Thursday",
      "date_compare": "21/04/2016",
      "title": "Archana L"
    },{
      "id": "6",
      "date": "April 22 | Friday",
      "date_compare": "22/04/2016",
      "title": "Jayalakshmi S Bhat"
    },{
      "id": "7",
      "date": "April 23 | Saturday",
      "date_compare": "23/04/2016",
      "title": "Meghana Murthy"
    },{
      "id": "8",
      "date": "April 24 | Sunday",
      "date_compare": "24/04/2016",
      "title": "Rajeshwary Shankar"
    },{
      "id": "9",
      "date": "April 25 | Monday",
      "date_compare": "25/04/2016",
      "title": "Uttara Swaminathan"
    },{
      "id": "10",
      "date": "April 26 | Tuesday",
      "date_compare": "26/04/2016",
      "title": "Vivek Sadashivam"
    },{
      "id": "11",
      "date": "April 27 | Wednesday",
      "date_compare": "27/04/2016",
      "title": "Dhathri H Kumar"
    },{
      "id": "12",
      "date": "April 28 | Thursday",
      "date_compare": "28/04/2016",
      "title": "Shreya Kolathaya"
    },{
      "id": "13",
      "date": "April 29 | Friday",
      "date_compare": "29/04/2016",
      "title": "Hosalli Raghuraman"
    },{
      "id": "14",
      "date": "April 30 | Saturday",
      "date_compare": "30/04/2016",
      "title": "Anjali Sriram"
    },{
      "id": "15",
      "date": "May 3 | Tuesday",
      "date_compare": "03/05/2016",
      "title": "Sesha Prasad"
    },{
      "id": "16",
      "date": "May 4 | Wednesday",
      "date_compare": "04/05/2016",
      "title": "Abhinandini"
    },{
      "id": "17",
      "date": "May 5 | Thursday",
      "date_compare": "05/05/2016",
      "title": "Yoga Keerthana"
    },{
      "id": "18",
      "date": "May 6 | Friday",
      "date_compare": "06/05/2016",
      "title": "Prathibakankshi Award Function"
    }, ];

  if (!window.localStorage['eve'] ) {
      window.localStorage['eve'] = JSON.stringify(evening);
    }
  if (!window.localStorage['jun'] ) {
      window.localStorage['jun'] = JSON.stringify(junior);
    }

  })

.controller('EveningCtrl', function($scope, $state, Concert, $window, $ionicPopup,$cordovaSocialSharing) {

  // Mandali-todo : Open Concert page from here

  // $scope.openSong = function(song) {
  //   $window.open(song.open_url, "_system");
  // }

  // Mandali-todo : GET JSON from python backend
  // $scope.evening = Concert.evening_concerts;
  $scope.share = function (concert) {
      var message = "Sree Rama Seva Mandali\n\n" + "Come Let's Celebrate Music!\n" + "Live Concert\n" + concert.title + "\n" + "Evening 6:30 on: "+ concert.date + "\nVenue: Fort High School Grounds, Bangalore\n\n";

      var subject = "Come Let's Celebrate Music\n";
      var link = "https://goo.gl/maps/eXF2NmeZK2T2";
      var image = ""
      $cordovaSocialSharing.share(message, subject, image, link);
  }

var evening = JSON.parse($window.localStorage['eve']);
$scope.eveningFiltered = [];
$scope.eveningDone = [];

  for (var index in evening) {
    var obj = evening[index];
    var date = parseDate(obj.date_compare);
    console.log(date);
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();

    today = parseDate(day + "/" + month + "/" + year);

    console.log(today);

    //Filter dates from current and newer
    if (date >= today)
      // console.log(new Date());
      $scope.eveningFiltered.push(obj);
    else {
      $scope.eveningDone.push(obj)
    }
  };



  function parseDate(dateStr) {
    var date = dateStr.split('/');
    var day = date[0];
    var month = date[1] - 1; //January = 0
    var year = date[2];
    return new Date(year, month, day);
  };

  $scope.showAlert = function() {
    $ionicPopup.alert({
      title: 'Added to Favorites',
      content: 'Find all your favorites from the menu'
    }).then(function(res) {
      console.log('Fav Added');
    });
  };

  $scope.FavConcert = function(index) {
    var favs = $window.localStorage['eve'];
    var FavList = JSON.parse(favs);
    FavList[index].fav = "1";
    $window.localStorage['eve'] = JSON.stringify(FavList);
    $scope.showAlert();
    console.log(FavList[index]);
    $state.go($state.current, {}, {reload: true})
    // alert(obj.title + "- Added to Favorites");
  };

  $scope.RemoveFav = function(obj, index) {
    var FavList = JSON.parse($window.localStorage['eve']);
    FavList[index].fav = "0";
    $window.localStorage['eve'] = JSON.stringify(FavList);
    console.log(FavList[index]);
  }


  $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.eveningFiltered,
      update: function (filteredItems) {
        $scope.eveningFiltered = filteredItems;
      },
      filterProperties: 'title'
    });
  };

  $scope.clearSearch = function() {
  $scope.search = '';
};

})

.filter('searchContacts', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) {
        if (letterMatch.test(item.title.substring(0, query.length))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  };

  if(typeof analytics !== undefined) { analytics.trackView("Evening"); }

$scope.initEvent = function() {
    if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
}

})

.controller('SpiritualCtrl', function($scope,$state, Concert, $window) {

  // Mandali-todo : Open Concert page from here

  // $scope.openSong = function(song) {
  //   $window.open(song.open_url, "_system");
  // }

  // Mandali-todo : GET JSON from python backend
  $scope.spiritual = [{}];
  if(typeof analytics !== undefined) { analytics.trackView("Spiritual"); }

$scope.initEvent = function() {
    if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
}

})

.controller('FundCtrl', function($scope, Concert, $window) {

  // Mandali-todo : Nothing yet
  if(typeof analytics !== undefined) { analytics.trackView("Fund"); }

$scope.initEvent = function() {
    if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
}

})

.controller('JuniorCtrl', function($scope,$state, Concert, $window, $ionicPopup) {

  // Mandali-todo : Open Concert page from here

  // $scope.openSong = function(song) {
  //   $window.open(song.open_url, "_system");
  // }
  function parseDate(dateStr) {
    var date = dateStr.split('/');
    var day = date[0];
    var month = date[1] - 1; //January = 0
    var year = date[2];
    return new Date(year, month, day);
  };

  $scope.showAlert = function() {
    $ionicPopup.alert({
      title: 'Added to Favorites',
      content: 'Find all your favorites from the menu'
    }).then(function(res) {
      console.log('Fav Added');
    });
  };

  $scope.FavConcert = function(index) {
    var favs = $window.localStorage['jun'];
    var FavList = JSON.parse(favs);
    console.log(FavList);
    FavList[index].fav = "1";
    $window.localStorage['jun'] = JSON.stringify(FavList);
    $scope.showAlert();
    console.log(FavList[index]);
    $state.go($state.current, {}, {reload: true})
    // alert(obj.title + "- Added to Favorites");
  };

  // Mandali-todo : GET JSON from python backend
  var junior = JSON.parse($window.localStorage['jun']);

$scope.juniorFiltered = [];
$scope.juniorDone = [];

    for (var index in junior) {
      var obj = junior[index];
        var date = parseDate(obj.date_compare);
        console.log(date);
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();

        today = parseDate(day + "/" + month + "/" + year);

        console.log(today);

      //Filter dates from current and newer
      if (date => new Date())
        $scope.juniorFiltered.push(obj);
      else {
        $scope.juniorDone.push(obj)
      }
    };

    if(typeof analytics !== undefined) { analytics.trackView("Prathibakankshi"); }

    $scope.initEvent = function() {
        if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
    }

})

.controller('FavCtrl', function($scope, $state, Concert, $window) {
  // Mandali-todo : GET JSON from python backend
  // favorites = from storage
  // var user = $localstorage.getObject('user');
  // _.uniq($scope.concerts, JSON.stringify);

var concerts = JSON.parse($window.localStorage['eve']);

$scope.favorites = [];

    for (var index in concerts) {
      var obj = concerts[index];
      var favorite = obj.fav;
      // console.log(obj.title,obj.fav);

      if (favorite == "1")
        $scope.favorites.push(obj);
    };

    console.log($scope.favorites);

var jun_concerts = JSON.parse($window.localStorage['jun']);

$scope.jun_favorites = [];

    for (var index in jun_concerts) {
      var obj_j = jun_concerts[index];
      var favorite_j = obj_j.fav;
      // console.log(obj_j.title,favorite_j);

      if (favorite_j == "1")
        $scope.jun_favorites.push(obj_j);
    };
    console.log($scope.jun_favorites);


  $scope.RemoveFav = function(obj,storage) {
    var FavList = JSON.parse($window.localStorage[storage]);
    FavList[obj].fav = "0";
    $window.localStorage[storage] = JSON.stringify(FavList);
    console.log(FavList[obj]);
    $state.go($state.current, {}, {reload: true});
  }

  if(typeof analytics !== undefined) { analytics.trackView("Favorites"); }

$scope.initEvent = function() {
    if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
}

});

app.controller('myCtrl', function($scope) {
    $scope.ShowSkins = true;  
    $scope.SideSelected = false;  

    $scope.Sides = {
        Side1 : {Name : "Front",
        Holes :
            [   {H : 1, Hcp : 15, WHcp : 8},   {H : 2, Hcp : 9,  WHcp : 5},    {H : 3, Hcp : 17, WHcp : 9},
                {H : 4, Hcp : 7,  WHcp : 4},   {H : 5, Hcp : 13, WHcp : 7},    {H : 6, Hcp : 1,  WHcp : 1},
                {H : 7, Hcp : 3,  WHcp : 2},   {H : 8, Hcp : 5,  WHcp : 3},    {H : 9, Hcp : 11, WHcp : 6}
            ]},            

        Side2 : {Name : "Back",
        Holes :
            [
                {H : 10, Hcp : 10, WHcp : 5},  {H : 11, Hcp : 6, WHcp : 3},  {H : 12, Hcp : 12, WHcp : 6},
                {H : 13, Hcp : 14, WHcp : 7},  {H : 14, Hcp : 18, WHcp : 9},  {H : 15, Hcp : 16, WHcp : 8},
                {H : 16, Hcp : 2, WHcp : 1},  {H : 17, Hcp : 8, WHcp : 4},  {H : 18, Hcp : 4, WHcp : 2}
            ]}
    };                 

    $scope.Golfers = [ 
        {Name : "Amanda",     HcpF : 22,   HcpB : 19,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Brett",     HcpF : 13,   HcpB : 11,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Chris F",     HcpF : 11,   HcpB : 9,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Dan",      HcpF : 12,  HcpB : 10,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Donny",    HcpF : 12,  HcpB : 10,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Eddie V",  HcpF : 10,  HcpB : 8,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Eddie V Jr",     HcpF : 13,   HcpB : 11,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Frenchy",   HcpF : 19,  HcpB : 16,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Gordon",   HcpF : 19,  HcpB : 16,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Hal",      HcpF : 9,   HcpB : 8,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Hank",     HcpF : 10,  HcpB : 9,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Jamison",  HcpF : 13,  HcpB : 11,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Jason",     HcpF : 5,   HcpB : 5,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Jeff",     HcpF : 16,  HcpB : 13,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Jim G",    HcpF : 14,  HcpB : 12,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Jim S",    HcpF : 11,  HcpB : 9,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Mark",     HcpF : 11,  HcpB : 9,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Ryan",     HcpF : 12,  HcpB : 10,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Sal",      HcpF : 11,   HcpB : 9,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Scott",     HcpF : 8,   HcpB : 7,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},
        {Name : "Shawn",     HcpF : 12,   HcpB : 10,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Tom",      HcpF : 13,  HcpB : 11,  Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Tony",     HcpF : 12,   HcpB : 10,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},     
        {Name : "Tozzi",    HcpF : 11,  HcpB : 9,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Trique",   HcpF : 10,   HcpB : 8,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}, 
        {Name : "Tyler",    HcpF : 10,  HcpB : 8,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]},                                                                                                                                                                
        {Name : "Zack",     HcpF : 10,   HcpB : 8,   Strokes : 0, show : true, TotalScore: 0, TotalPoints: 0,
        Holes: 
        [   
            {H : 1, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 2, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 3, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 4, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 5, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 6, Score : 0, HScore : 0, Points : 0, Swings : 0 },
            {H : 7, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 8, Score : 0, HScore : 0, Points : 0, Swings : 0 }, {H : 9, Score : 0, HScore : 0, Points : 0 , Swings : 0}
        ]}                                         
    ];

    $scope.Scorecard = [
        {Hole: 1,   Hcp: 15,    Par: 4, Side: "Front"},
        {Hole: 2,   Hcp: 9,     Par: 4, Side: "Front"},
        {Hole: 3,   Hcp: 17,    Par: 4, Side: "Front"},
        {Hole: 4,   Hcp: 7,     Par: 3, Side: "Front"},
        {Hole: 5,   Hcp: 13,    Par: 5, Side: "Front"},
        {Hole: 6,   Hcp: 1,     Par: 5, Side: "Front"},
        {Hole: 7,   Hcp: 3,     Par: 4, Side: "Front"},
        {Hole: 8,   Hcp: 5,     Par: 4, Side: "Front"},
        {Hole: 9,   Hcp: 11,    Par: 4, Side: "Front"},
        {Hole: 10,  Hcp: 10,    Par: 4, Side: "Back"},
        {Hole: 11,  Hcp: 6,     Par: 3, Side: "Back"},
        {Hole: 12,  Hcp: 12,    Par: 4, Side: "Back"},
        {Hole: 13,  Hcp: 14,    Par: 4, Side: "Back"},
        {Hole: 14,  Hcp: 18,    Par: 3, Side: "Back"},
        {Hole: 15,  Hcp: 16,    Par: 3, Side: "Back"},
        {Hole: 16,  Hcp: 2,     Par: 5, Side: "Back"},
        {Hole: 17,  Hcp: 8,     Par: 4, Side: "Back"},
        {Hole: 18,  Hcp: 4,     Par: 4, Side: "Back"}
    ];

    $scope.SetSide = function(){
        if($scope.selectedSide.Name == "Front"){
            $scope.HoleInfo = $scope.Sides.Side1.Holes;
        }
        else{
            $scope.HoleInfo = $scope.Sides.Side2.Holes;
        }

        $scope.SideSelected = true;          
    }

    $scope.UpdateScore = function(name, score){
        if (score > 0){
            //find golfer with the name given
            let currGolfer;
            for(let index = 0; index < $scope.Golfers.length; index++){
                if($scope.Golfers[index].Name == name){
                    currGolfer = $scope.Golfers[index];
                    break;
                }
            }
            currGolfer.TotalScore += score;
        }        
    }

    $scope.GetSkins = function(){        
        let size = $scope.Golfers.length;
        let player = $scope.Golfers[0];
        let SideDeets = [];

        GolfersThatPlayed = [];

        for(let index = 0; index < size; index++){
            if($scope.Golfers[index].Holes[0].Score > 0){
                GolfersThatPlayed.push($scope.Golfers[index]);
            }
        }   
        
        console.log("This weeks players: ", GolfersThatPlayed);

        //selection sort for now
        let sidePlayed = $scope.selectedSide.Name;
        for(let x = 0; x < GolfersThatPlayed.length; x++){
            for(let y = x; y < GolfersThatPlayed.length; y++){
                if(sidePlayed == "Front"){
                    SideDeets = $scope.Sides.Side1;

                    if(GolfersThatPlayed[y].HcpF < GolfersThatPlayed[x].HcpF){
                        let temp = GolfersThatPlayed[x]; 
                        GolfersThatPlayed[x] = GolfersThatPlayed[y];
                        GolfersThatPlayed[y] = temp;
                    }
                }   
                else if (sidePlayed == "Back"){
                    SideDeets = $scope.Sides.Side2;

                    if(GolfersThatPlayed[y].HcpB < GolfersThatPlayed[x].HcpB){
                        let temp = GolfersThatPlayed[x]; 
                        GolfersThatPlayed[x] = GolfersThatPlayed[y];
                        GolfersThatPlayed[y] = temp;
                    }
                }             
            }            
        }

        //go through each score and see how many strokes you get off of the lowest hcp
        let lowHcp = GolfersThatPlayed[0];          
        
        if(sidePlayed == "Front"){
            $scope.LowHcp = lowHcp.HcpF;            
        }
        else if (sidePlayed == "Back"){
            $scope.LowHcp = lowHcp.HcpB;
        }
        console.log("Low HCP today: ", lowHcp);

        for(let index = 1; index < GolfersThatPlayed.length; index++){
            let currGolfer = GolfersThatPlayed[index];
            if(sidePlayed == "Front"){
                if(currGolfer.HcpF > lowHcp.HcpF){                                        
                    currGolfer.Strokes = currGolfer.HcpF - lowHcp.HcpF;
                    console.log("HCP diffrence for: ", currGolfer);
                }                
            }
            else if (sidePlayed == "Back"){
                if(currGolfer.HcpB > lowHcp.HcpB){                    
                    currGolfer.Strokes = currGolfer.HcpB - lowHcp.HcpB;
                }
            }            
        }        
        
        /*
        PUT THIS INTO ITS OWN METHOD
        logic to calculate net scores
        score = difference between low hcp and curr player hcp
        cases:
        score = 0 - do nothing 
        score 1-9 - take off 1 stroke per hole per score
            if score = 3 take off 1 stroke for 3 lowest hcp holes
        score > 9 - take off 1 stroke for each of the 9 holes
            also take off 1 for each of the lowest hcp holes until you 
            get to score value        
        */
       console.log("side deets: ", SideDeets);
        for(let index = 0; index < GolfersThatPlayed.length; index++){
            let currGolfer = GolfersThatPlayed[index];            

            if(currGolfer.Strokes == 0){                
                for(let hole = 0; hole < currGolfer.Holes.length; hole++){        
                    currGolfer.Holes[hole].HScore = currGolfer.Holes[hole].Score;
                }
            }
            else if(currGolfer.Strokes <= 9 ){
                for(let hole = 0; hole < currGolfer.Holes.length; hole++){                    
                    //take one stroke off until you hit currGolfer.Strokes value   
                    if(SideDeets.Holes[hole].WHcp <= currGolfer.Strokes){                        
                        currGolfer.Holes[hole].HScore = currGolfer.Holes[hole].Score - 1;
                        console.log("Weighted HCP changed: ", currGolfer)
                    }   
                    else{
                        currGolfer.Holes[hole].HScore = currGolfer.Holes[hole].Score;
                    }              
                }
            }
            else{
                //currGolfer.Strokes > 9
                let extraStrokes = currGolfer.Strokes % 9;
                
                if (currGolfer.Strokes > 0 && extraStrokes != 0){
                    for(let hole = 0; hole < currGolfer.Holes.length; hole++){
                        //start at the lowest hcp hole and move up
                        //take one stroke off until you hit currGolfer.Strokes value
                        if(SideDeets.Holes[hole].WHcp <= extraStrokes){
                            //take two strokes off for the hole
                            currGolfer.Holes[hole].HScore = currGolfer.Holes[hole].Score - 2;
                        }
                        else{
                            currGolfer.Holes[hole].HScore = currGolfer.Holes[hole].Score - 1;
                        }                    
                    }
                }    
                else if (currGolfer.Strokes > 0 && extraStrokes == 0){
                    //case where player has a multiple of 9 so they get currGolfer.Strokes/9 per hole
                    extraStrokes = currGolfer.Strokes/9;
                    for(let hole = 0; hole < currGolfer.Holes.length; hole++){
                        //start at the lowest hcp hole and move up
                        //take one stroke off until you hit currGolfer.Strokes value                        
                        currGolfer.Holes[hole].HScore = currGolfer.Holes[hole].Score - extraStrokes;                        
                    }
                }            
            }
        } 

        //possibly do something here to assign points to each score against par
        for(let index = 0; index < $scope.Golfers.length; index++){
            let side = $scope.selectedSide.Name; //this is used to look at the par values later
            //for each golfer loop through all holes
            for(let hole = 0; hole < $scope.Golfers[index].Holes.length; hole++){
                let currentHole = $scope.Golfers[index].Holes[hole].H;
                let currPar = GetPar(currentHole, side);
                $scope.Golfers[index].Holes[hole].Points = GetHolePoints($scope.Golfers[index].Holes[hole].HScore, currPar);
                $scope.Golfers[index].TotalPoints += $scope.Golfers[index].Holes[hole].Points;

                //set the Swings here too
                $scope.Golfers[index].Holes[hole].Swings = $scope.Golfers[index].Holes[hole].Score - $scope.Golfers[index].Holes[hole].HScore;
            }
        }

        for(let index = 0; index < $scope.Golfers.length; index++){
            console.log($scope.Golfers[index].Name, ":", $scope.Golfers[index].Holes);
        }

        /*
        To get skins we need to find the lowest score for each hole and see if there are any ties        
        look through all HScores and see if we have one that is the lowest for each hole
        */  
        
        let skins = []; 
        let HoleSkins = [];
        for(var hole = 0; hole < 9; hole++){     
            let minScore = 10;
            let scoreCount = 0;            
            let SkinInfo = [];
            let currHoleSkins = [];

            for(var golfer = 0; golfer < GolfersThatPlayed.length; golfer++){
                //for each hole look at all scores for each golfer and see if they're the min
                //if only one min post this to the skins list otherwise skip   
                if(GolfersThatPlayed[golfer].Holes[hole].HScore < minScore){ 
                    if(currHoleSkins.length > 0){
                        for(var item = 0; item < currHoleSkins.length; item++){
                            currHoleSkins.pop();
                        }
                    }                                       
                    
                    //want to save name, hole, score, weighted score
                    SkinInfo = {Name: GolfersThatPlayed[golfer].Name, Hole: GolfersThatPlayed[golfer].Holes[hole].H, Score: GolfersThatPlayed[golfer].Holes[hole].Score, HScore: GolfersThatPlayed[golfer].Holes[hole].HScore};
                    currHoleSkins.push(SkinInfo);
                    scoreCount = 1; 
                    minScore = GolfersThatPlayed[golfer].Holes[hole].HScore;   
                    console.log(SkinInfo);                                  
                }
                else if (GolfersThatPlayed[golfer].Holes[hole].HScore == minScore){
                    //if more than one person we can skip the loop
                    currHoleSkins.pop();
                    scoreCount = 0;                    
                }
            } 

            for(var index = 0; index < currHoleSkins.length; index++){
                HoleSkins.push(currHoleSkins[index]);
            }
            
            GolfersThatPlayed[golfer]
        }
                      
        $scope.HoleSkins = HoleSkins;
        $scope.ShowSkins = false;
    };  
    
    $scope.removeRow = function(name){                
        let Golfers = $scope.Golfers;
        //loop through names and find the one that's deleted and mark show as false
        for(let index = 0; index < Golfers.length; index++){
            if(Golfers[index].Name == name){
                Golfers[index].show = false;
                break;
            }
        }
    };

    function GetPar(hole, side){
        if (side == "Back"){
            hole = hole + 9;
        }

        for (let index = 0; index < $scope.Scorecard.length; index++){
            if($scope.Scorecard[index].Hole == hole){
                return $scope.Scorecard[index].Par;
            }
        }
    }

    function GetHolePoints(score, par){
        //par
        if(score == par){
            return 2;
        }
        //birdie
        else if (score == par - 1){
            return 4;
        }
        //eagle
        else if (score == par - 2){
            return 8;
        }
        //albatross
        else if (score == par - 3){
            return 10;
        }
        //bogey
        else if (score == par + 1){
            return 1;
        }
        else{
            return 0;
        }
    }
});
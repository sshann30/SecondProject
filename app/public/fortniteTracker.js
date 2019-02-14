//do i need to move any of these functions to different folders in the MVC

$(function(){
    var submitBtn = $('#submit');
    var platformDropDownBtn = $('#platform a');
    var epicNickName = $('#epicNickName');
    var results = $('#results');
    var selectedOption = "";
    // default Value
    var dropDownValue = 'pc';
    var nameValue = "";
    

    platformDropDownBtn.click(function(e){
        e.preventDefault();
        selectedOption = $(this).text();
        console.log(selectedOption);
    })



    submitBtn.click(function(){
        nameValue = epicNickName.val()
        var gamer = {};
        gamer.epicNickName = epicNickName.val().toLowerCase();
        gamer.platformDropDownBtn = selectedOption;

        console.log(gamer);

        $.post("/api/new", gamer).then(function(data, err){
            if (err) throw err
            console.log(data);
        }).then(function(res){
            console.log('response received')
            displayData();
            resetResult();
        })



    });
    platformDropDownBtn.click(function(){
        dropDownValue = $(this).text();
    });

    function resetResult(){
        // results.html('');
        epicNickName.val('');
    }

    function displayData(){
        console.log(nameValue);
        $.get("/api/" + nameValue, function(data){
            console.log(data)

            
                var results = $('#results');
                      var epicUserHandle = data.epicUserHandle;
                      var list = '<ul class="list-group">' +
                                  '<li class="list-group-item">' + 'Gamer: ' + data.lifeTimeStats[9] + '</li>' +
                                  '<li class="list-group-item">' + 'Win Percentage: ' + data.lifeTimeStats[10] +'</li>' +
                                  '<li class="list-group-item">' + 'Kills: ' + data.lifeTimeStats[11] +'</li>' +
                                  '<li class="list-group-item">' + 'K/D ' + data.lifeTimeStats[12] +'</li>' +
                                  '</ul>'
              
                      var template = '<div class="card text-center">' +
                                          '<h5 class="card-header">' + epicUserHandle + '</h5>' +
                                          '<div class="card-body">' +
                                          '<h5 class="card-title">' + 'Wins: ' + '</h5>' +
                                          '<p class="card-text">' + list + '</p>' +
                                          '</div>' +
                                          '</div>'
                    
                      results.html(template);
                  

                 
        })



    //     var epicUserHandle = data.epicUserHandle;
    //     var list = '<ul class="list-group">' +
    //                 '<li class="list-group-item">' + 'Solo: ' + data.stats.p2 + '</li>' +
    //                 '<li class="list-group-item">' + 'Duos: ' + data.stats.p10 +'</li>' +
    //                 '<li class="list-group-item">' + 'Squads: ' + data.stats.p9 +'</li>' +
    //                 '</ul>'

    //     var template = '<div class="card text-center">' +
    //                         '<h5 class="card-header">' + epicUserHandle + '</h5>' +
    //                         '<div class="card-body">' +
    //                         '<h5 class="card-title">' + 'Wins: ' + '</h5>' +
    //                         '<p class="card-text">' + list + '</p>' +
    //                         '</div>' +
    //                         '</div>'
      
    //     results.html(template);
    }

});


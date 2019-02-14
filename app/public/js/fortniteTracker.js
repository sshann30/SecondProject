//do i need to move any of these functions to different folders in the MVC

$(function(){
    var submitBtn = $('#submit');
    var platformDropDownBtn = $('#platform a');
    var epicNickName = $('#epicNickName');
    var results = $('#results');
    var selectedOption = "";
    // default Value
    var dropDownValue = 'pc';
    

    platformDropDownBtn.click(function(e){
        e.preventDefault();
        selectedOption = $(this).text();
        console.log(selectedOption);
    })



    submitBtn.click(function(){
        var hello = {};
        hello.epicNickName = epicNickName.val().toLowerCase();
        hello.platformDropDownBtn = selectedOption;

        console.log(hello);

        $.post("/api/stats", hello).then(function(data, err){
            if (err) throw err
            console.log(data);
        })



        resetResult();
        displayData();
    });
    platformDropDownBtn.click(function(){
        dropDownValue = $(this).text();
    });

    function resetResult(){
        results.html('');
        epicNickName.val('');
    }

    function displayData(){

        $.get("/api/stats", function(data){
            console.log(data)

            function displayData(data){
                console.log(data);
                var results = $('#results');
                      var epicUserHandle = data.epicUserHandle;
                      var list = '<ul class="list-group">' +
                                  '<li class="list-group-item">' + 'Solo: ' + data.stats.p2 + '</li>' +
                                  '<li class="list-group-item">' + 'Duos: ' + data.stats.p10 +'</li>' +
                                  '<li class="list-group-item">' + 'Squads: ' + data.stats.p9 +'</li>' +
                                  '</ul>'
              
                      var template = '<div class="card text-center">' +
                                          '<h5 class="card-header">' + epicUserHandle + '</h5>' +
                                          '<div class="card-body">' +
                                          '<h5 class="card-title">' + 'Wins: ' + '</h5>' +
                                          '<p class="card-text">' + list + '</p>' +
                                          '</div>' +
                                          '</div>'
                    
                      results.html(template);
                  }

                  displayData(data);
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


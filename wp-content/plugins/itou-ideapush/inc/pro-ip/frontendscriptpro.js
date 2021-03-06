jQuery(document).ready(function ($) {
   
    


    //only do the key up if the suggested idea is selected in the settings
    if($('.suggested-idea').length){


        //get data
        var data = $('#suggested-ideas').attr('data');

        //lets turn the data into an array
        var splitIdeas = data.split('||||');

        var amountOfIdeas = splitIdeas.length;

	
  			if(amountOfIdeas > 1){
        	//this is used to get the original data for html injection
          var ideaCandidatesObject = {};

          //this is used for comparison purpoes
          var ideaCandidatesComparisonObject = {};

          //console.log(splitIdeas);

          for (var i = 0; i < amountOfIdeas; i++) {

              //lets split again into individual parts
              var splitIdeaParts = splitIdeas[i].split('|||');

              var ideaId = splitIdeaParts[0];
              var ideaTitle = splitIdeaParts[1];
              var ideaContent = splitIdeaParts[2];
              var ideaLink = splitIdeaParts[3];

            //   ideaTitle = ideaTitle.replace("?","");
            //   ideaContent = ideaContent.replace("?","");

                if(typeof ideaTitle === 'undefined' || typeof ideaContent === 'undefined'){

                } else {
                    ideaCandidatesObject[ideaId] = {title:ideaTitle, content:ideaContent, link:ideaLink};
                    ideaCandidatesComparisonObject[ideaId] = {title:ideaTitle.toUpperCase(), content:ideaContent.toUpperCase()};
                }
              

          }   
        //   console.log(ideaCandidatesObject); 






          //when any of the sorting selects change re-render the ideas
          $('.ideapush-container').on("keyup", ".ideapush-form-idea-title, .ideapush-form-idea-description", function (event) {


              // console.log(ideaCandidatesObject);
              // console.log(ideaCandidatesComparisonObject);

              var titleValue = $('.ideapush-form-idea-title').val();
              var descriptionValue = $('.ideapush-form-idea-description').val();

              //if both fields are blank clear things
              if(titleValue=="" && descriptionValue==""){

                  //clear any existing suggestion
                  $(this).parent().find('.suggested-idea').empty();

              } else {
                  //if there's some value then do the idea suggestion
                  if(titleValue.length > 0 || descriptionValue.length > 0){

                      //what we need to do is split the supplied title and content into an array
                      //we then need to compare those arrays to the title and content of the prospective ideas

                      //we are going to reduce the characters to improve performance 
                      var titleReduced = titleValue.substring(0,255).toUpperCase();
                      var descriptionReduced = descriptionValue.substring(0,255).toUpperCase();

                      //entered title splitting
                      var titleSplit = titleReduced.split(' ');
                      var titleSplitLength = titleSplit.length;

                      //entered content splitting
                      var descriptionSplit = descriptionReduced.split(' ');
                      var descriptionSplitLength = descriptionSplit.length;

                      //checks to see if item is in array
                      function isInArray(value, array) {
                          return array.indexOf(value) > -1;
                      }

                      var knockoutWords = ['A','ABLE','ABOUT','ABOVE','ABROAD','ACCORDING','ACCORDINGLY','ACROSS','ACTUALLY','ADJ','AFTER','AFTERWARDS','AGAIN','AGAINST','AGO','AHEAD','AIN\'T','ALL','ALLOW','ALLOWS','ALMOST','ALONE','ALONG','ALONGSIDE','ALREADY','ALSO','ALTHOUGH','ALWAYS','AM','AMID','AMIDST','AMONG','AMONGST','AN','AND','ANOTHER','ANY','ANYBODY','ANYHOW','ANYONE','ANYTHING','ANYWAY','ANYWAYS','ANYWHERE','APART','APPEAR','APPRECIATE','APPROPRIATE','ARE','AREN\'T','AROUND','AS','A\'S','ASIDE','ASK','ASKING','ASSOCIATED','AT','AVAILABLE','AWAY','AWFULLY','B','BACK','BACKWARD','BACKWARDS','BE','BECAME','BECAUSE','BECOME','BECOMES','BECOMING','BEEN','BEFORE','BEFOREHAND','BEGIN','BEHIND','BEING','BELIEVE','BELOW','BESIDE','BESIDES','BEST','BETTER','BETWEEN','BEYOND','BOTH','BRIEF','BUT','BY','C','CAME','CAN','CANNOT','CANT','CAN\'T','CAPTION','CAUSE','CAUSES','CERTAIN','CERTAINLY','CHANGES','CLEARLY','C\'MON','CO','CO.','COM','COME','COMES','CONCERNING','CONSEQUENTLY','CONSIDER','CONSIDERING','CONTAIN','CONTAINING','CONTAINS','CORRESPONDING','COULD','COULDN\'T','COURSE','C\'S','CURRENTLY','D','DARE','DAREN\'T','DEFINITELY','DESCRIBED','DESPITE','DID','DIDN\'T','DIFFERENT','DIRECTLY','DO','DOES','DOESN\'T','DOING','DONE','DON\'T','DOWN','DOWNWARDS','DURING','E','EACH','EDU','EG','EIGHT','EIGHTY','EITHER','ELSE','ELSEWHERE','END','ENDING','ENOUGH','ENTIRELY','ESPECIALLY','ET','ETC','EVEN','EVER','EVERMORE','EVERY','EVERYBODY','EVERYONE','EVERYTHING','EVERYWHERE','EX','EXACTLY','EXAMPLE','EXCEPT','F','FAIRLY','FAR','FARTHER','FEW','FEWER','FIFTH','FIRST','FIVE','FOLLOWED','FOLLOWING','FOLLOWS','FOR','FOREVER','FORMER','FORMERLY','FORTH','FORWARD','FOUND','FOUR','FROM','FURTHER','FURTHERMORE','G','GET','GETS','GETTING','GIVEN','GIVES','GO','GOES','GOING','GONE','GOT','GOTTEN','GREETINGS','H','HAD','HADN\'T','HALF','HAPPENS','HARDLY','HAS','HASN\'T','HAVE','HAVEN\'T','HAVING','HE','HE\'D','HE\'LL','HELLO','HELP','HENCE','HER','HERE','HEREAFTER','HEREBY','HEREIN','HERE\'S','HEREUPON','HERS','HERSELF','HE\'S','HI','HIM','HIMSELF','HIS','HITHER','HOME','HOPEFULLY','HOW','HOWBEIT','HOWEVER','HUNDRED','I','I\'D','IE','IF','IGNORED','I\'LL','I\'M','IMMEDIATE','IZN','INASMUCH','INC','INC.','INDEED','INDICATE','INDICATED','INDICATES','INNER','INSIDE','INSOFAR','INSTEAD','INTO','INWARD','IS','ISN\'T','IT','IT\'D','IT\'LL','ITS','IT\'S','ITSELF','I\'VE','J','JUST','K','KEEP','KEEPS','KEPT','KNOW','KNOWN','KNOWS','L','LAST','LATELY','LATER','LATTER','LATTERLY','LEAST','LESS','LEST','LET','LET\'S','LIKE','LIKED','LIKELY','LIKEWISE','LITTLE','LOOK','LOOKING','LOOKS','LOW','LOWER','LTD','M','MADE','MAINLY','MAKE','MAKES','MANY','MAY','MAYBE','MAYN\'T','ME','MEAN','MEANTIME','MEANWHILE','MERELY','MIGHT','MIGHTN\'T','MINE','MINUS','MISS','MORE','MOREOVER','MOST','MOSTLY','MR','MRS','MUCH','MUST','MUSTN\'T','MY','MYSELF','N','NAME','NAMELY','ND','NEAR','NEARLY','NECESSARY','NEED','NEEDN\'T','NEEDS','NEITHER','NEVER','NEVERF','NEVERLESS','NEVERTHELESS','NEW','NEXT','NINE','NINETY','NO','NOBODY','NON','NONE','NONETHELESS','NOONE','NO-ONE','NOR','NORMALLY','NOT','NOTHING','NOTWITHSTANDING','NOVEL','NOW','NOWHERE','O','OBVIOUSLY','OF','OFF','OFTEN','OH','OK','OKAY','OLD','ON','ONCE','ONE','ONES','ONE\'S','ONLY','ONTO','OPPOSITE','OR','OTHER','OTHERS','OTHERWISE','OUGHT','OUGHTN\'T','OUR','OURS','OURSELVES','OUT','OUTSIDE','OVER','OVERALL','OWN','P','PARTICULAR','PARTICULARLY','PAST','PER','PERHAPS','PLACED','PLEASE','PLUS','POSSIBLE','PRESUMABLY','PROBABLY','PROVIDED','PROVIDES','Q','QUE','QUITE','QV','R','RATHER','RD','RE','REALLY','REASONABLY','RECENT','RECENTLY','REGARDING','REGARDLESS','REGARDS','RELATIVELY','RESPECTIVELY','RIGHT','ROUND','S','SAID','SAME','SAW','SAY','SAYING','SAYS','SECOND','SECONDLY','SEE','SEEING','SEEM','SEEMED','SEEMING','SEEMS','SEEN','SELF','SELVES','SENSIBLE','SENT','SERIOUS','SERIOUSLY','SEVEN','SEVERAL','SHALL','SHAN\'T','SHE','SHE\'D','SHE\'LL','SHE\'S','SHOULD','SHOULDN\'T','SINCE','SIX','SO','SOME','SOMEBODY','SOMEDAY','SOMEHOW','SOMEONE','SOMETHING','SOMETIME','SOMETIMES','SOMEWHAT','SOMEWHERE','SOON','SORRY','SPECIFIED','SPECIFY','SPECIFYING','STILL','SUB','SUCH','SUP','SURE','T','TAKE','TAKEN','TAKING','TELL','TENDS','TH','THAN','THANK','THANKS','THANX','THAT','THAT\'LL','THATS','THAT\'S','THAT\'VE','THE','THEIR','THEIRS','THEM','THEMSELVES','THEN','THENCE','THERE','THEREAFTER','THEREBY','THERE\'D','THEREFORE','THEREIN','THERE\'LL','THERE\'RE','THERES','THERE\'S','THEREUPON','THERE\'VE','THESE','THEY','THEY\'D','THEY\'LL','THEY\'RE','THEY\'VE','THING','THINGS','THINK','THIRD','THIRTY','THIS','THOROUGH','THOROUGHLY','THOSE','THOUGH','THREE','THROUGH','THROUGHOUT','THRU','THUS','TILL','TO','TOGETHER','TOO','TOOK','TOWARD','TOWARDS','TRIED','TRIES','TRULY','TRY','TRYING','T\'S','TWICE','TWO','U','UN','UNDER','UNDERNEATH','UNDOING','UNFORTUNATELY','UNLESS','UNLIKE','UNLIKELY','UNTIL','UNTO','UP','UPON','UPWARDS','US','USE','USED','USEFUL','USES','USING','USUALLY','V','VALUE','VARIOUS','VERSUS','VERY','VIA','VIZ','VS','W','WANT','WANTS','WAS','WASN\'T','WAY','WE','WE\'D','WELCOME','WELL','WE\'LL','WENT','WERE','WE\'RE','WEREN\'T','WE\'VE','WHAT','WHATEVER','WHAT\'LL','WHAT\'S','WHAT\'VE','WHEN','WHENCE','WHENEVER','WHERE','WHEREAFTER','WHEREAS','WHEREBY','WHEREIN','WHERE\'S','WHEREUPON','WHEREVER','WHETHER','WHICH','WHICHEVER','WHILE','WHILST','WHITHER','WHO','WHO\'D','WHOEVER','WHOLE','WHO\'LL','WHOM','WHOMEVER','WHO\'S','WHOSE','WHY','WILL','WILLING','WISH','WITH','WITHIN','WITHOUT','WONDER','WON\'T','WOULD','WOULDN\'T','X','Y','YES','YET','YOU','YOU\'D','YOU\'LL','YOUR','YOU\'RE','YOURS','YOURSELF','YOURSELVES','YOU\'VE','Z','ZERO'];




                      //lets create an array which will hold the posts and their scores
                      var ideasRankedWithScores = [];


                      //loop through each post
                      for(var key in ideaCandidatesComparisonObject){

                          var postId = key;
                          var postTitle = ideaCandidatesComparisonObject[key]['title'];
                          var postContent = ideaCandidatesComparisonObject[key]['content'];
                        
                          //remove question and exclamation and full stops
                          postTitle = postTitle.replace("?","").replace(".","").replace("!","");
                          postContent = postContent.replace("?","").replace(".","").replace("!","");


                          var postTitleArray = postTitle.split(' ');
                          var postContentArray = postContent.split(' ');


                          //remove knockout words
                          postTitleArray = postTitleArray.filter(function(val) {
                              return knockoutWords.indexOf(val) == -1;
                          });

                          //remove knockout words
                          postContentArray = postContentArray.filter(function(val) {
                              return knockoutWords.indexOf(val) == -1;
                          });

                          // console.log(postTitleArray);





                          var postScore = 0;

                          //lets loop through the titles and content
                          //we are going to give title matches an additional score because hey titles are important

                          //lets loop through titles
                          for (var i = 0; i < titleSplitLength; i++) {
                              if(isInArray(titleSplit[i], postTitleArray) == true){
                                  postScore += 2;
                              }
                          }    

                          //lets loop through content
                          for (var i = 0; i < descriptionSplitLength; i++) {
                              if(isInArray(descriptionSplit[i], postContentArray) == true){
                                  postScore += 1;
                              }
                          } 


                          ideasRankedWithScores.push([postId,postScore]);

                      } //end foreach post loop


                      //now lets order these ideas from most matches to least
                      //sort the array
                      ideasRankedWithScores.sort(function(a, b) {
                          return b[1] - a[1];
                      });

                      //console.log(ideasRankedWithScores);

                      //now lets only do something if the score is greater than 0
                      var topRelatedIdea = ideasRankedWithScores[0];
                      if(topRelatedIdea[1] > 0 ){

                          //lets output the idea onto the page
                          //lets only do this if the idea is different, otherwise don't do anything!
                          if(!$('.suggested-idea-inner').length || $('.suggested-idea-inner').attr('data') !== topRelatedIdea[0]){

                              var trimmedContent = ideaCandidatesObject[topRelatedIdea[0]]['content'].substring(0, 150);

                              //check if single idea disabled
                              var singleIdeaDisabled = $('.ideapush-container-form').attr('data-single-idea-disabled');

                              if(singleIdeaDisabled == 'true'){
                                var postLinkClass = 'search-idea';
                                var postLink = '#';
                              } else {
                                var postLinkClass = '';
                                var postLink = ideaCandidatesObject[topRelatedIdea[0]]['link'];    
                              }

                              var htmlOutput = '<div class="suggested-idea-inner" data="'+topRelatedIdea[0]+'" >';
                                  htmlOutput += '<span class="suggestion-question">'+$('#suggested-ideas-text').attr('data')+'</span>'; 
                                  htmlOutput += '<a class="suggestion-title '+postLinkClass+'" href="'+postLink+'" >'+ideaCandidatesObject[topRelatedIdea[0]]['title']+'</a>';
                                  htmlOutput += '<span class="suggestion-content">'+trimmedContent+'...</span>';
                              htmlOutput += '</div>';

                              //clear any existing suggestion
                              $('.suggested-idea').empty();

                              //append the data to the suggested idea element
                              $('.suggested-idea').append(htmlOutput).hide().show('fast');

                          }

                      }

                  } //end if title and content have some value

              } //end if value is blank



          });
        }
  
        
    
    } //end of suggested idea
    
    
    
    
    
    //do tag suggestion
    //only do the key up if the suggested idea is selected in the settings and if data exists
    if($('.suggested-tags').length && $('#suggested-tags').attr('data').length > 0){


        

        //get new suggestions when the key is pressed
        $('.ideapush-container').on("keyup", ".ideapush-form-idea-tags-input", function (e) {
            
            if (e.keyCode !== 188 || e.keyCode !== 13) {


                //get all tags on the page and store it in a variable
                var tagsOnPage = $('#suggested-tags').attr('data');
                var tagsToArray = tagsOnPage.split('|');

                //turn into an object array so we have a comparison value and an original value
                var newTagArray = [];
                var newTagObject = {};

                function getPosition(string, subString, index) {
                    return string.split(subString, index).join(subString).length;
                }
                

                for (var i = 0; i < tagsToArray.length; i++) {

                    var tagName = tagsToArray[i];

                    //remove board prefix from tag should it exist
                    if (tagName.indexOf("BoardTag-") != -1) {
                        // console.log("we found a match");
                        var positionOfSecondDash = getPosition(tagName, '-', 2)+1;
                        tagName = tagName.substring(positionOfSecondDash);
                    }    

                    newTagObject[tagName.toUpperCase()] = tagName;
                    newTagArray.push(tagName.toUpperCase());
                }








            
                var enteredValue = $('.ideapush-form-idea-tags-input').val().replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase();

                if(enteredValue !== ''){

                    //create a temporary array which gets the existing array
                    var tempArray = newTagArray;

                    //cycle through existing tags that have already been entered and then remove these values from the array
                    $( ".successful-tag" ).each(function( index ) {

                        var index = tempArray.indexOf($(this).text().toUpperCase());

                        if (index > -1) {
                            tempArray.splice(index, 1);
                        }
                    });

                    //now we have an array we can start to grade
                    //lets declare an empty array and add the name of the tag and the score
                    var tempArrayValuesRanked = [];

                    for (var i = 0; i < tempArray.length; i++) {
                        var substr_count = tempArray[i].split(enteredValue).length - 1;
                        tempArrayValuesRanked.push([tempArray[i],substr_count]);
                    }

                    //sort the array
                    tempArrayValuesRanked.sort(function(a, b) {
                        return b[1] - a[1];
                    });

                    //empty any previous values
                    $( ".suggested-tags" ).empty();
                    $( ".suggested-tags" ).addClass('suggested-tags-min-height');

                    //work out how many tags we should output
                    var amountOfTagsToShow = 3;
                    if(newTagArray.length < 3){
                        amountOfTagsToShow = newTagArray.length; 
                    }

                    //output the tag
                    for(var i=0; i < amountOfTagsToShow; i++){
                        $( ".suggested-tags" ).append( '<span class="suggested-tag">'+ newTagObject[tempArrayValuesRanked[i][0]] +'</span>' ); 
                    }
                    

                } else {
                    $( ".suggested-tags" ).empty();        
                }

            }

        });
    }
    
    






    
    //do voting functionality
    $('.ideapush-container').on("click", ".suggested-tag", function (event) {
        
        event.preventDefault();
        
        var tagValue = $(this).text();
        
        $(this).slideUp();
        
        
        
        $('.ideapush-form-idea-tags-input').before( '<span class="successful-tag">'+tagValue+'<i class="ideapush-icon-Delete delete-idea-tag"></i></span>' );
                    
        
        //clear input
        $('.ideapush-form-idea-tags-input').val(''); 
        
        
        
        
        $('.ideapush-form-idea-tags-input').focus();
        
    });
    



    //delete idea
    $('.ideapush-container').on("click", ".user-delete-idea", function (event) {
        
        event.preventDefault();

        var ideaId = $(this).attr('data');
        var thisIcon = $(this);
        // console.log(ideaId);

        alertify
        .okBtn($('#ok-cancel-buttons').attr('data-yes'))
        .cancelBtn($('#ok-cancel-buttons').attr('data-no'))
        .confirm($('#dialog-idea-delete').attr('data'), function (ev) {

            //do query
            var data = {
                'action': 'user_delete_idea',
                'ideaId': ideaId,
            }; 

            jQuery.ajax({
            url: user_delete_idea.ajaxurl,
            type: "POST",
            data: data,
            context: this,    
            })
            .done(function(data, textStatus, jqXHR) {

                //console.log(data);
                if(data == 'SUCCESS'){
                    alertify.success($('#dialog-idea-deleted').attr('data'));

                    $('.idea-item-'+ideaId).slideUp();

                }

            });       
                
        }, function(ev) {

            //no was clicked
        

        });

    });

    //edit idea
    $('.ideapush-container').on("click", ".user-edit-idea", function (event) {
        
        event.preventDefault();

        var ideaId = $(this).attr('data');
        var ideaTitle = $(this).attr('data-title');
        var ideaContent = $(this).attr('data-content');

        var thisIcon = $(this);


        alertify
        .okBtn($('#dialog-edit-idea-heading').attr('data'))
        .cancelBtn($('#ok-cancel-buttons').attr('data-cancel'))
        .confirm($('#dialog-edit-idea-heading').attr('data')+'<input style="display:none;" type="text" class="ideapush-form-idea-description-popup" placeholder="Idea Description" maxlength="100" required><input style="margin-top:20px; font-size: 16px;" type="text" class="ideapush-form-idea-title-popup"  value="'+ideaTitle+'" required><textarea class="ideapush-form-idea-content-popup" style="margin-top:20px; font-size: 16px;">'+ideaContent+'</textarea>', function (ev) {

            //get inputs
            var honey = $('.alertify .ideapush-form-idea-description-popup').val();
            var ideaTitle = $('.alertify .ideapush-form-idea-title-popup').val();
            var ideaContent = $('.alertify .ideapush-form-idea-content-popup').val();
           
            if(ideaTitle.length > 0 && honey.length < 1){
                // console.log(ideaId);
                //do query
                var data = {
                    'action': 'user_edit_idea',
                    'ideaId': ideaId,
                    'ideaTitle': ideaTitle,
                    'ideaContent': ideaContent,
                }; 

                jQuery.ajax({
                url: user_edit_idea.ajaxurl,
                type: "POST",
                data: data,
                context: this,    
                })
                .done(function(data, textStatus, jqXHR) {

                    //console.log(data);
                    if(data == 'SUCCESS'){
                        alertify.success($('#dialog-idea-edited').attr('data'));

                        //now lets update the idea title and content and also the content in the edit button
                        thisIcon.attr('data-title',ideaTitle);
                        thisIcon.attr('data-content',ideaContent);

                        $('.idea-item-'+ideaId).find('.idea-title').text(ideaTitle);
                        $('.idea-item-'+ideaId).find('.idea-item-content').text(ideaContent);



                    }

                });
            }    


        }, function(ev) {


        });

    });
    
    

     //show and hide tabs
     $('body').on("click", ".ideapush-leader-board-menu li", function (event) {
        event.preventDefault();

        var thisMenuItem = $(this);

        //if the item is already active do nothing
        if(thisMenuItem.hasClass('active')){
            //do nothing
        } else {

            //remove the active class from all menu items
            $('.ideapush-leader-board-menu li').removeClass('active');
            thisMenuItem.addClass('active');

            //slide up all existing content
            $('.ideapush-leader-board-content > div').slideUp();

            //get the data attribute
            var activeTab = thisMenuItem.attr('data');

            $('.'+activeTab).slideDown();


            // console.log('do something');
        }

    });    


    //do duplicate idea functionality
    $('.ideapush-container').on("click", ".admin-duplicate-idea", function (event) {
        
        event.preventDefault();

        var duplicateIdea = $(this).attr('data');

        alertify
        .okBtn($('#ok-cancel-buttons').attr('data-submit'))
        .cancelBtn($('#ok-cancel-buttons').attr('data-cancel'))
        .confirm($('#dialog-idea-duplicate').attr('data')+'<input style="display:none;" type="text" class="ideapush-form-middle-name-popup" placeholder="Middle name" maxlength="100" required><input style="margin-top:20px;" type="text" class="ideapush-form-duplicate-idea-popup" placeholder="'+$('#duplicate-idea-placeholder').attr('data')+'" maxlength="100" required>', function (ev) {

            var originalIdea = $('.original-idea-selection').val();
            var boardId = $('.ideapush-container').attr('data');


            console.log(duplicateIdea);
            console.log(originalIdea);

            var data = {
                'action': 'merge_duplicate_ideas',
                'duplicateIdea': duplicateIdea,
                'originalIdea': originalIdea,
                'boardId': boardId,
            }; 

            jQuery.ajax({
            url: merge_duplicate_ideas.ajaxurl,
            type: "POST",
            data: data,
            context: this,    
            })
            .done(function(data, textStatus, jqXHR) {

                console.log(data);
                if(data == "SUCCESS"){
                    //display success message
                    alertify.success($('#dialog-idea-duplicate-success').attr('data'));
                    //refresh the page
                    location.reload();

                }

                
            });


        }, function(ev) {


        });
        
    });


    //suggest idea for duplicate
    $('body').on('keyup', '.ideapush-form-duplicate-idea-popup',function(){
        
        var inputValue = $(this).val().toUpperCase();

        if(inputValue.length < 1){
            $('.original-idea-selection').remove();
        } else {
            //remove existing select
            $('.original-idea-selection').remove();

            //get data
            var data = $('#suggested-ideas').attr('data');

            //lets turn the data into an array
            var splitIdeas = data.split('||||');

            var amountOfIdeas = splitIdeas.length;

        
            if(amountOfIdeas > 1){

                //start output
                var selectHtml = '<select class="original-idea-selection">';

                //this is used to get the original data for html injection
                var ideaCandidatesObject = {};

                //this is used for comparison purpoes
                // var ideaCandidatesComparisonObject = {};

                //console.log(splitIdeas);

                for (var i = 0; i < amountOfIdeas; i++) {

                    //lets split again into individual parts
                    var splitIdeaParts = splitIdeas[i].split('|||');

                    var ideaId = splitIdeaParts[0];
                    var ideaTitle = splitIdeaParts[1];
                    var ideaContent = splitIdeaParts[2];
                    // var ideaLink = splitIdeaParts[3];

                    // ideaCandidatesObject[ideaId] = {title:ideaTitle, content:ideaContent, link:ideaLink};
                    // ideaCandidatesComparisonObject[ideaId] = {title:ideaTitle.toUpperCase(), content:ideaContent.toUpperCase()};
					
					if(typeof ideaTitle === 'undefined' || typeof ideaContent === 'undefined'){
						
					} else {
						if(ideaTitle.toUpperCase().indexOf(inputValue) !== -1 || ideaContent.toUpperCase().indexOf(inputValue) !== -1){
                        	selectHtml += '<option value="'+ideaId+'">'+ideaTitle+'</option>';
                    	}
					}
					
                    
                    

                } 

                // console.log(ideaCandidatesComparisonObject);

                selectHtml += '</select>';

                $(this).after(selectHtml);


            }  

        }

    });


    //when single idea page is disabled and when someone clicks on title, add to search
    $('.ideapush-container').on("click", ".search-idea", function (event) {
        event.preventDefault();
        var thisValue = $(this).text();

        //add value to search
        $('.ideapush-search-input').val(thisValue);
        //fire on change event to trigger search
        $('.ideapush-search-input').change();


    });


    function reRenderComments(ideaId){

        var thisListItem = $('.idea-item-'+ideaId);
        var boardId = $('.ideapush-container').attr('data');

        //check if list item is currently active because if it is remove the current comment div
        
        //get comment data
        var data = {
            'action': 'get_idea_comments',
            'ideaId': ideaId,
            'boardId': boardId,
        }; 

        jQuery.ajax({
        url: get_idea_comments.ajaxurl,
        type: "POST",
        data: data,
        context: this,    
        })
        .done(function(data, textStatus, jqXHR) {
            
            // console.log(data);

            if(data != 'ERROR'){

                //remove any existing comment item
                $('#idea-item-comments-listing').slideUp('fast').remove();

                //append the comment list item
                $( data ).insertAfter( thisListItem );

            }


        }); 
        
    }


    //do inline comment functionality
    $('.ideapush-container').on('click', '.idea-item-comments-inline', function (event) {

        //get the post id
        var ideaId = $(this).attr('data');

        if($('#idea-item-comments-listing').length && $('#idea-item-comments-listing').attr('data') == ideaId){
            //remove any existing comment item
            $('#idea-item-comments-listing').slideUp('fast').remove();

        } else {
            reRenderComments(ideaId);
            $( document ).trigger('renderComments');
        }

        
        

    });

    $('.ideapush-container').on('click', '.submit-new-comment', function (event) {

        event.preventDefault();

        var ideaId = $(this).attr('data-idea-id');
        var userId = $(this).attr('data-user-id');
        var comment = $(this).prev().val();

        if(comment.length < 1){
            //show error
            alertify.error($('#no-comment').attr('data'));
        } else {

            //proceed to post comment
            var data = {
                'action': 'post_idea_comment',
                'ideaId': ideaId,
                'userId': userId,
                'comment': comment,
            }; 
    
            jQuery.ajax({
            url: post_idea_comment.ajaxurl,
            type: "POST",
            data: data,
            context: this,    
            })
            .done(function(data, textStatus, jqXHR) {
                
                // console.log(data);
                if(data != 'ERROR'){
    
                    //rerender comments to show new comment
                    reRenderComments(ideaId);
                }
    
    
            });

        }



    });
    


});
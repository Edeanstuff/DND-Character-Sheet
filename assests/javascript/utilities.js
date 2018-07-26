function characterSelection() {
    var characterArray = [
        "Bard",
        "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
        "https://pbs.twimg.com/profile_images/453965435839320064/DmBEt66h_400x400.jpeg"];
    var $newBr1 = $("<br>");
    var $newBr2 = $("<br>");
    var $newRow = $("<div>").addClass("row border");
    var $newColumn4 = $("<div>").addClass("col-md-4").css({
        padding: 0
    });
    var $newColumn8 = $("<div>").addClass("col-md-8").css({
        padding: 0
    });
    var $newCardHeader = $("<div>").addClass("card-header text-center font-weight-bold");
    var $newCardBody = $("<div>").addClass("card-body").css({
        "padding-top": 0
    });
    
    for(var i = 0; i < characterArray.length; i++) {
        $newCardHeader.append(characterArray[i]);
        characterArray.shift();
        $newCardBody.append($newBr2);
        $newCardBody.append(characterArray[i]);
        characterArray.shift();
        var $newImg = $("<img>").css({
            width: "375px",
            height: "375px"
        }).attr({
            "src": characterArray[i]
        });
        $newColumn4.append($newImg);
        $newColumn8.append($newCardHeader, $newCardBody)
        $newRow.append($newColumn4, $newColumn8);
        $("#characterSelection").append($newBr1, $newRow);
    }
}

characterSelection();
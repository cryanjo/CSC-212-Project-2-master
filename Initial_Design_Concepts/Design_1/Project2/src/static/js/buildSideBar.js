/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
makeSideBarListing = function (roomData) {
    
    // create and add a container to the sidebar for the room information
    var roomListContainer = document.createElement("div");
    document.getElementById("sidebar").appendChild(roomListContainer);

    // add a title "Campus Residences"
    var header1 = document.createElement("h2sb"),
        header2,
        header3;
    header1.innerHTML = roomData.name;
    roomListContainer.appendChild(header1);

    // add the campus areas
    var campusAreas = roomData.children.length,
        areaBuildings,
        buildingRooms,
        roomList,
        area,
        building,
        rooms;

    for ( var i=0; i<campusAreas ; ++i) {

        // add each campus area name as the second header
        header2 = document.createElement("h3sb");
        header2.innerHTML = "<p>" + roomData.children[i].name + "</p>";
        roomListContainer.appendChild(header2);

        // add the buildings
        areaBuildings = roomData.children[i].children.length;
        area = roomData.children[i];
        for ( var j=0; j<areaBuildings ; ++j) {

            // add each building name as the third header
            header3 = document.createElement("h4sb");
            header3.innerHTML = area.children[j].name;
            roomListContainer.appendChild(header3);

            // add the rooms
            buildingRooms = area.children[j].children.length;
            building = area.children[j];
            // as part of a list
            roomList = document.createElement("ul");
            roomListContainer.appendChild(roomList);
            for ( var k=0; k<buildingRooms ; ++k) {

                // add each room type and availability as a member of a ul
                rooms = document.createElement("li");
                rooms.innerHTML = building.children[k].size + " available for " + building.children[k].name;
                roomList.appendChild(rooms);
            }
        }
    }
};


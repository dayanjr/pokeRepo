
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//async function changeImageSource() {
//    numb = 1
//    let arr = ["","","","","","","","",""]
//    let li = ["/images/site/bug.png","/images/site/fire.png","/images/site/water.png","/images/site/grass.png","/images/site/electric.png","/images/site/rock.png","/images/site/ground.png","/images/site/steel.png","/images/site/fairy.png","/images/site/dragon.png","/images/site/normal.png","/images/site/flying.png","/images/site/ice.png","/images/site/dark.png","/images/site/ghost.png","/images/site/psychic.png","/images/site/fighting.png","/images/site/poison.png"]
//    while(li.length > 0){
//        console.log("size of list:", li.length)
//        var ramdom_num = Math.floor(Math.random() * li.length);
//        console.log("random index", ramdom_num)
//        var src_id = "pokemon-type-" + numb;
//        console.log("id", src_id)
//        console.log("list", li)
//        console.log("number",numb)
//        document.getElementById(src_id).src = li[ramdom_num];
//        li.splice(ramdom_num, 1);
//        numb += 1;
//        await sleep(1010);
//    }
//    // Generate a random index within the array length
//  const randomIndex = Math.floor(Math.random() * arr.length);
//  const myParagraph = document.getElementById('gen_format');
//  myParagraph.textContent = arr[randomIndex];
//}
async function changeImageSource() {
    let li = ["/images/site/bug.png","/images/site/fire.png","/images/site/water.png","/images/site/grass.png","/images/site/electric.png","/images/site/rock.png","/images/site/ground.png","/images/site/steel.png","/images/site/fairy.png","/images/site/dragon.png","/images/site/normal.png","/images/site/flying.png","/images/site/ice.png","/images/site/dark.png","/images/site/ghost.png","/images/site/psychic.png","/images/site/fighting.png","/images/site/poison.png"];
    let arr = [];
    while(li.length > 0){
        const randomIndex = Math.floor(Math.random() * li.length);
        const src_id = "pokemon-type-" + (arr.length + 1); // Incremented by arr length to ensure unique ID
        document.getElementById(src_id).src = li[randomIndex];
        arr.push(li[randomIndex]); // Add the used image source to arr to check for duplicates
        li.splice(randomIndex, 1); // Remove the used image source from li
        await sleep(1010);
    }
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * arr.length);
}



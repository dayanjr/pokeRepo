
function changeImageSource() {
    numb = 1
    let arr = ["gen1","gen2","gen3","gen4","gen5","gen6","gen7","gen8","gen9"]
    let li = ["/images/site/bug.png","/images/site/fire.png","/images/site/water.png","/images/site/grass.png","/images/site/electric.png","/images/site/rock.png","/images/site/ground.png","/images/site/steel.png","/images/site/fairy.png","/images/site/dragon.png","/images/site/normal.png","/images/site/flying.png","/images/site/ice.png","/images/site/dark.png","/images/site/ghost.png","/images/site/psychic.png","/images/site/fighting.png","/images/site/poison.png"]
    while(li.length > 0){
        console.log("size of list:", li.length)
        var ramdom_num = Math.floor(Math.random() * li.length);
        console.log("random index", ramdom_num)
        var src_id = "pokemon-type-" + numb;
        console.log("id", src_id)
        console.log("list", li)
        console.log("number",numb)
        document.getElementById(src_id).src = li[ramdom_num];
        li.splice(ramdom_num, 1);
        numb += 1;
    }
    // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * arr.length);
  const myParagraph = document.getElementById('gen_format');
  myParagraph.textContent = arr[randomIndex];
}


function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested div div div .target")
}

function increaseRankBy( n ) {
  const rankedLists = document.querySelectorAll( '.ranked-list' )

  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children

    for ( let j = 0, k = children.length; j < k; j++ ) {
      children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
    }
  }
}


function deepestChild(){
  let grandNode = document.getElementById("grand-node")
  let upNode = grandNode.children[0]
  while (upNode){
    grandNode = upNode
    upNode = grandNode.children[0]
  }
  return grandNode

}

function quadrant(cx, cy, px, py){
  if (px > cx && py > cy){
    return 'Q1'
  }else if( px < cx && py > cy){
    return 'Q2'
  }else if(px < cx && py < cy){
    return 'Q3'
  }else if (px > cx && py < cy){
    return 'Q4'
  }else{
    return 'Infinite'
  }
}

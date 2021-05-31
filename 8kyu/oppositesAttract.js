const  lovefunc = (flower1, flower2) => (flower1 % 2 == 0 && flower2 % 2 != 0 || flower2 % 2 == 0 && flower1 % 2 != 0 ) ? true : false;


lovefunc(1,4) //, true)
lovefunc(2,2) //, false)
lovefunc(0,1) //, true)
lovefunc(0,0) //, false)
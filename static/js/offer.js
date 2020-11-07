document.getElementById("obsluga").onclick = function() {Oferta1()};
document.getElementById("finanse").onclick = function() {Oferta2()};
document.getElementById("doradztwo").onclick = function() {Oferta3()};
document.getElementById("remonty").onclick = function() {Oferta4()};
document.getElementById("interesy").onclick = function() {Oferta5()};
document.getElementById("przejrzystosc").onclick = function() {Oferta6()};
document.getElementById("kontrola").onclick = function() {Oferta7()};
document.getElementById("oferta").onclick = function() {Oferta8()};

function Oferta1() {
document.getElementById("description_rachunkowosc").style.display="flex";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="none";
document.getElementById("img_offer_1_2").style.display="inline";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta2() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="flex";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="none";
document.getElementById("img_offer_2_2").style.display="inline";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta3() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="flex";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="none";
document.getElementById("img_offer_3_2").style.display="inline";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta4() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="flex";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="none";
document.getElementById("img_offer_4_2").style.display="inline";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta5() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="flex";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="none";
document.getElementById("img_offer_5_2").style.display="inline";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta6() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="flex";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="none";
document.getElementById("img_offer_6_2").style.display="inline";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta7() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="flex";
document.getElementById("description_oferta").style.display="none";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="none";
document.getElementById("img_offer_7_2").style.display="inline";
document.getElementById("img_offer_8_1").style.display="inline";
document.getElementById("img_offer_8_2").style.display="none";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_1").style.display = "inline"; document.getElementById("img_offer_8_2").style.display = "none";}
}

function Oferta8() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="flex";
document.getElementById("img_offer_1_1").style.display="inline";
document.getElementById("img_offer_1_2").style.display="none";
document.getElementById("img_offer_2_1").style.display="inline";
document.getElementById("img_offer_2_2").style.display="none";
document.getElementById("img_offer_3_1").style.display="inline";
document.getElementById("img_offer_3_2").style.display="none";
document.getElementById("img_offer_4_1").style.display="inline";
document.getElementById("img_offer_4_2").style.display="none";
document.getElementById("img_offer_5_1").style.display="inline";
document.getElementById("img_offer_5_2").style.display="none";
document.getElementById("img_offer_6_1").style.display="inline";
document.getElementById("img_offer_6_2").style.display="none";
document.getElementById("img_offer_7_1").style.display="inline";
document.getElementById("img_offer_7_2").style.display="none";
document.getElementById("img_offer_8_1").style.display="none";
document.getElementById("img_offer_8_2").style.display="inline";
document.getElementById("obsluga").onmouseover = function() {mouseOver1()};
document.getElementById("obsluga").onmouseout = function() {mouseOut1()};
document.getElementById("finanse").onmouseover = function() {mouseOver2()};
document.getElementById("finanse").onmouseout = function() {mouseOut2()};
document.getElementById("doradztwo").onmouseover = function() {mouseOver3()};
document.getElementById("doradztwo").onmouseout = function() {mouseOut3()};
document.getElementById("remonty").onmouseover = function() {mouseOver4()};
document.getElementById("remonty").onmouseout = function() {mouseOut4()};
document.getElementById("interesy").onmouseover = function() {mouseOver5()};
document.getElementById("interesy").onmouseout = function() {mouseOut5()};
document.getElementById("przejrzystosc").onmouseover = function() {mouseOver6()};
document.getElementById("przejrzystosc").onmouseout = function() {mouseOut6()};
document.getElementById("kontrola").onmouseover = function() {mouseOver7()};
document.getElementById("kontrola").onmouseout = function() {mouseOut7()};
document.getElementById("oferta").onmouseover = function() {mouseOver8()};
document.getElementById("oferta").onmouseout = function() {mouseOut8()};
function mouseOver1() {document.getElementById("img_offer_1_2").style.display = "inline"; document.getElementById("img_offer_1_1").style.display = "none";}
function mouseOut1() {document.getElementById("img_offer_1_1").style.display = "inline"; document.getElementById("img_offer_1_2").style.display = "none";}
function mouseOver2() {document.getElementById("img_offer_2_2").style.display = "inline"; document.getElementById("img_offer_2_1").style.display = "none";}
function mouseOut2() {document.getElementById("img_offer_2_1").style.display = "inline"; document.getElementById("img_offer_2_2").style.display = "none";}
function mouseOver3() {document.getElementById("img_offer_3_2").style.display = "inline"; document.getElementById("img_offer_3_1").style.display = "none";}
function mouseOut3() {document.getElementById("img_offer_3_1").style.display = "inline"; document.getElementById("img_offer_3_2").style.display = "none";}
function mouseOver4() {document.getElementById("img_offer_4_2").style.display = "inline"; document.getElementById("img_offer_4_1").style.display = "none";}
function mouseOut4() {document.getElementById("img_offer_4_1").style.display = "inline"; document.getElementById("img_offer_4_2").style.display = "none";}
function mouseOver5() {document.getElementById("img_offer_5_2").style.display = "inline"; document.getElementById("img_offer_5_1").style.display = "none";}
function mouseOut5() {document.getElementById("img_offer_5_1").style.display = "inline"; document.getElementById("img_offer_5_2").style.display = "none";}
function mouseOver6() {document.getElementById("img_offer_6_2").style.display = "inline"; document.getElementById("img_offer_6_1").style.display = "none";}
function mouseOut6() {document.getElementById("img_offer_6_1").style.display = "inline"; document.getElementById("img_offer_6_2").style.display = "none";}
function mouseOver7() {document.getElementById("img_offer_7_2").style.display = "inline"; document.getElementById("img_offer_7_1").style.display = "none";}
function mouseOut7() {document.getElementById("img_offer_7_1").style.display = "inline"; document.getElementById("img_offer_7_2").style.display = "none";}
function mouseOver8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
function mouseOut8() {document.getElementById("img_offer_8_2").style.display = "inline"; document.getElementById("img_offer_8_1").style.display = "none";}
}
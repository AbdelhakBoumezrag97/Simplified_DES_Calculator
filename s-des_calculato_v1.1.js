function keyGeneration() {
	var key = document.getElementById('key').value;
	var pTen = [2,4,1,6,3,9,0,8,7,5];
	var pHieht = [5,2,6,3,7,4,9,8];
	var stringOne = ''+key;
	var keyPer = [];
	if (key.length < 10 || key.length > 10 ) {
		document.getElementById('keyone').innerHTML= 'Please Put 10 digits without space!';
        document.getElementById('keyTwo').innerHTML= '';
	}else {
		for (var i = 0; i < key.length; i++) {
			index = pTen[i]; 
            keyPer.push(stringOne[index]);
			}
			
			//document.getElementById('keyone').innerHTML= 'key round one = '+ keyPer +'<hr>';
		    var keyone = [];
		    var shifted = [keyPer[1], keyPer[2], keyPer[3], keyPer[4], keyPer[5], keyPer[6], keyPer[7], keyPer[8], keyPer[9], keyPer[0]]; 
		    for (var i = 0; i < pHieht.length; i++) {
		    	var indexone = pHieht[i];
                keyone.push(shifted[indexone]);
		    }

            var stringkeyone ='';
            var str = keyone.toString();
            for (var i = 0; i < keyone.length; i++) {
            	stringkeyone+=keyone[i];
            }



		    document.getElementById('keyone').innerHTML= 'key round one = '+stringkeyone;
            var keyTwo = [];
		    shifted = [keyPer[3], keyPer[4], keyPer[5], keyPer[6], keyPer[7], keyPer[8], keyPer[9], keyPer[0], keyPer[1], keyPer[2]];
		    for (var i = 0; i < pHieht.length; i++) {
		    	var indexTwo = pHieht[i];
                keyTwo.push(shifted[indexTwo]);
		    }

		    var stringkeyTwo ='';
            var strTwo = keyTwo.toString();
            for (var i = 0; i < keyTwo.length; i++) {
            	stringkeyTwo+=keyTwo[i];
            }
		    document.getElementById('keyTwo').innerHTML= 'key round two = '+stringkeyTwo;
		};
		};
		
		////////////////////////////////////////////////////////////////////////////////////////////////

function Encryption() {
	var PlainText = document.getElementById('msg').value;
	var iniP = [1,5,2,0,3,7,4,6];
	var stringTwo = ''+PlainText;
	var msgPer = [];
	if (PlainText.length < 8 || PlainText.length > 8) {
		document.getElementById('cipher').innerHTML = 'Please Put the plain text with 8 digit!';
	}else {
		for (var i = 0; i < iniP.length; i++) {
			var indexThree = iniP[i];
			msgPer.push(stringTwo[indexThree]);
			};
            
			var lZero = msgPer.slice(0, 4);
			var rZero = msgPer.slice(4, 8);

            var expention = [3,0,1,2,1,2,3,0];
            var rightExp  = [];
            for (var i = 0; i <expention.length ; i++) {
          	    var indexFour = expention[i];
                rightExp.push(rZero[indexFour]);

            };

           //var keyone = [1,0,1,0,1,0,1,1];
           var keyone = document.getElementById('resultKeyone').value;
           if (keyone.length < 8 || keyone.length > 8) {
           	 document.getElementById('cipher').innerHTML = 'Please Put the key round one with 8 digit!';
           }else {
            var firstXor = [];
            for (var i = 0; i < rightExp.length; i++) {
            	var xor = rightExp[i]^keyone[i];
            	firstXor.push(xor);

            };

            //document.getElementById('cipher').innerHTML = firstXor ;
            var partOne = firstXor.slice(0, 4);
            var partTwo = firstXor.slice(4, 8);
            var partOneOne = parseInt(''+partOne[0]+partOne[3], 2);
            var partOneTwo = parseInt(''+partOne[1]+partOne[2], 2);
            var partTwoOne = parseInt(''+partTwo[0]+partTwo[3], 2);
            var partTwoTwo = parseInt(''+partTwo[1]+partTwo[2], 2);


           
            
            var sBoxO = [['01','00','11','10'],
                         ['11','10','01','00'],
                         ['00','10','01','11'],
                         ['11','01','11','10']
                        ];

            var sBoxT = [['00','01','10','11'],
                         ['10','00','01','11'],
                         ['11','00','01','00'],
                         ['10','01','00','11']
                        ];  

            
            var resultSboxOne = sBoxO[partOneOne][partOneTwo];
            var resultSboxTwo = sBoxT[partTwoOne][partTwoTwo];
            
            var resultSbox = resultSboxOne+resultSboxTwo;
            
            var pFour = [1,3,2,0];
            var pFourResult = [];
            for (var i = 0; i < pFour.length; i++) {
            	var indexFive = pFour[i];
            	pFourResult.push(resultSbox[indexFive]);
            };
            
            var rOne = [];
            for (var i = 0; i < pFourResult.length; i++) {
            	var xorTwo = pFourResult[i]^lZero[i];
            	rOne.push(xorTwo);
            };
            
            var lOne = rZero; 
            
            var resultRoundOne = rOne.concat(lOne);
            
            lOne = resultRoundOne.slice(0, 4);
            rOne = resultRoundOne.slice(4, 8);
            
            var rightOneExp =[];
            for (var i = 0; i <expention.length ; i++) {
          	    var index = expention[i];
                rightOneExp.push(rOne[index]);

            };
            
           // var keyTwo = [1,0,1,1,1,1,0,0];
           var keyTwo = document.getElementById('resultKeyTwo').value;
           if (keyTwo.length < 8 || keyTwo.length > 8) {
                document.getElementById('cipher').innerHTML = 'Please Put the key round two with 8 digit!';

           }else {
            var secondXor = [];
            for (var i = 0; i < rightOneExp.length; i++) {
            	var xor = rightOneExp[i]^keyTwo[i];
            	secondXor.push(xor);

            };
            partOne = secondXor.slice(0, 4);
            partTwo = secondXor.slice(4, 8);
            partOneOne = parseInt(''+partOne[0]+partOne[3], 2);
            partOneTwo = parseInt(''+partOne[1]+partOne[2], 2);
            partTwoOne = parseInt(''+partTwo[0]+partTwo[3], 2);
            partTwoTwo = parseInt(''+partTwo[1]+partTwo[2], 2);
            
            resultSboxOne = sBoxO[partOneOne][partOneTwo];
            resultSboxTwo = sBoxT[partTwoOne][partTwoTwo];
            
            resultSbox = resultSboxOne+resultSboxTwo;
            var pFourResultTwo = [];
            for (var i = 0; i < pFour.length; i++) {
            	var index = pFour[i];
            	pFourResultTwo.push(resultSbox[index]);
            };
            var rTwo = [];
            for (var i = 0; i < pFourResultTwo.length; i++) {
            	var xorTwo = pFourResultTwo[i]^lOne[i];
            	rTwo.push(xorTwo);
            };  
            var lTwo = rOne; 
            var resultRoundTwo = lTwo.concat(rTwo);
            var initPerIvers = [3,0,2,4,6,1,7,5]
            
            var CipherText =[];
            for (var i = 0; i < initPerIvers.length; i++) {
            	index = initPerIvers[i];
            	CipherText.push(resultRoundTwo[index]);
            };
            var stringCipher ='';
            var strCipher = CipherText.toString();
            for (var i = 0; i < CipherText.length; i++) {
            	stringCipher+=CipherText[i];
            };
            document.getElementById('cipher').innerHTML = 'The Cipher Text is: ' + stringCipher;
        };
        };
        };
		};

		
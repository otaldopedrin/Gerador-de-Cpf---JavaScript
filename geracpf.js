	var validof = false;
	var cpf = new Array();
	
	function validaCpf(D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11){
        var vfinal;
        var vfinal2;
        var primeiroD;
        var segundoD;
        var D1;
        var D2;
        var D3;
        var D4;
        var D5;
        var D6;
        var D7;
        var D8;
        var D9;
        var D10;
        var D11;
        var D13 = D11;
        var D12 = D10;
        
        vfinal = ((parseInt(D1)*10)+(parseInt(D2)*9)+(parseInt(D3)*8)+(parseInt(D4)*7)+(parseInt(D5)*6)+(parseInt(D6)*5)+(parseInt(D7)*4)+(parseInt(D8)*3)+(parseInt(D9)*2))%11;
        
        if(vfinal >= 2){
            primeiroD = 11-vfinal;
        }else{
            primeiroD = 0;
        }
        
        vfinal2 = ((parseInt(D1)*11)+(parseInt(D2)*10)+(parseInt(D3)*9)+(parseInt(D4)*8)+(parseInt(D5)*7)+(parseInt(D6)*6)+(parseInt(D7)*5)+(parseInt(D8)*4)+(parseInt(D9)*3)+(parseInt(primeiroD)*2))%11;
        
        if(vfinal2 >= 2){
            segundoD = 11-vfinal2;
        }else{
            segundoD = 0;
        }
        
        if(D12 == primeiroD && D13 == segundoD){
            validof = true;
        }else{
            validof = false;
        }

        return vfinal;
    }

    function geraCpf(){
		var min = 0;
		var max = 9;
		
		cpf[0] = Math.floor((Math.random() * 9) + 1);
		cpf[1] = Math.floor((Math.random() * 9) + 1);
		cpf[2] = Math.floor((Math.random() * 9) + 1);

		cpf[3] = Math.floor((Math.random() * 9) + 1);
		cpf[4] = Math.floor((Math.random() * 9) + 1);
		cpf[5] = Math.floor((Math.random() * 9) + 1);

		cpf[6] = Math.floor((Math.random() * 9) + 1);
		cpf[7] = Math.floor((Math.random() * 9) + 1);
		cpf[8] = Math.floor((Math.random() * 9) + 1);

		cpf[9] = Math.floor((Math.random() * 9) + 1);
		cpf[10] = Math.floor((Math.random() * 9) + 1);
	}

	function geraValida(){
		var certo = false;
		var x = 0;

		while(certo != true){
			geraCpf();
			validaCpf(cpf[0],cpf[1],cpf[2],cpf[3],cpf[4],cpf[5],cpf[6],cpf[7],cpf[8],cpf[9],cpf[10]);
			if(validof == true){
				certo = true;
			}
		}

		while(x != 11){
			document.write(cpf[x]);
            if (x=="2") {
                document.write(".");
            }
            if (x=="5") {
                document.write(".");
            }
            if (x=="8") {
                document.write("-");
            }
			x++;
		}

        document.write("</br>");
        x = 0;
        while(x != 11){
            document.write(cpf[x]);
            x++;
        }
	}

    geraValida();
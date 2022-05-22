

function myFunction(){
    var client = document.getElementById("clientName").value;
    document.getElementById("client").innerHTML=client;
    var tpiName = document.getElementById("tpiTypE").value;
    document.getElementById("TPIType").innerHTML=tpiName;
    var pmc = document.getElementById("TPIName").value;
    document.getElementById("PMC").innerHTML=pmc;
    var Contractor = document.getElementById("contractorName").value;
    document.getElementById("Contractor").innerHTML=Contractor;
    var project = document.getElementById("projectName").value;
    document.getElementById("project").innerHTML=project;
    var HDD_Details = document.getElementById("HDD_Detail").value;
    document.getElementById("HDD_Details").innerHTML=HDD_Details;
    var Do = document.getElementById("od").value; //outer Dia in meter
    document.getElementsByClassName("Do")[0].innerHTML=Do;
    document.getElementsByClassName("Do")[1].innerHTML=Do;
    document.getElementsByClassName("Do")[2].innerHTML=Do;
    document.getElementsByClassName("Do")[3].innerHTML=Do;
    document.getElementsByClassName("Do")[4].innerHTML=Do;
    document.getElementsByClassName("Do")[5].innerHTML=Do;
    document.getElementsByClassName("Do")[6].innerHTML=Do;
    document.getElementsByClassName("Do")[7].innerHTML=Do;
    document.getElementsByName("PI")[0].innerHTML=Math.PI;
    document.getElementsByName("PI")[1].innerHTML=Math.PI;
    document.getElementsByName("PI")[2].innerHTML=Math.PI;
    document.getElementsByName("PI")[3].innerHTML=Math.PI;
    document.getElementsByName("PI")[4].innerHTML=Math.PI;
    var T = document.getElementById("pipeThick").value/1000; //Wall thickness
    document.getElementsByClassName("T")[0].innerHTML=T*1000;
    document.getElementsByClassName("T")[1].innerHTML=T;
    var Di = Do-T-T;
    document.getElementsByClassName("Di")[0].innerHTML=Di;
    document.getElementsByClassName("Di")[1].innerHTML=Di;
    document.getElementsByClassName("Di")[2].innerHTML=Di;
    var SMYS = document.getElementById("PipeMat").value; //in PSI
    document.getElementById("pmt").innerHTML= "API 5L X" + SMYS/1000;
    document.getElementsByClassName("smys")[0].innerHTML=SMYS;
    document.getElementsByClassName("smys")[1].innerHTML=SMYS;
    var Wt =  0.785*(Do**2-Di**2)*7850;  //((Do-T) * Math.PI) * T * 7850; Weight of Pipe in Air 
    document.getElementsByClassName("Wt")[0].innerHTML=Wt;
    document.getElementsByClassName("Wt")[1].innerHTML=Wt;
    var E = 210000000000;  //Modulus of Elasticity
    document.getElementsByClassName("E")[0].innerHTML=E;
    document.getElementsByClassName("E")[1].innerHTML=E;
    document.getElementsByClassName("E")[2].innerHTML=E;
    document.getElementsByClassName("E")[3].innerHTML=E;
    var R = document.getElementById("roc").value; //Radius of Curvature in meter
    document.getElementsByClassName("R")[0].innerHTML=R;
    document.getElementsByClassName("R")[1].innerHTML=R;
    document.getElementsByClassName("R")[2].innerHTML=R;
    document.getElementsByClassName("R")[3].innerHTML=R;
    document.getElementsByClassName("R")[4].innerHTML=R;
    var d = 239; //Co-efficient of Drag N/M2
    document.getElementsByClassName("d")[0].innerHTML=d;
    document.getElementsByClassName("d")[1].innerHTML=d;
    var dm = 1150; // Mud density Kg/m3
    document.getElementsByClassName("dm")[0].innerHTML=dm;
    document.getElementsByClassName("dm")[1].innerHTML=dm;
    var dw = 1000; //Water density Kg/M3
    document.getElementById("dw1").innerHTML=dw;
    var ds = 7850; //Water density Kg/M3
    document.getElementById("ds").innerHTML=ds;
    var L = document.getElementById("SectionLength").value; //Proposed Length in Meter
    document.getElementsByClassName("L")[0].innerHTML=L;
    document.getElementsByClassName("L")[1].innerHTML=L;
    document.getElementsByClassName("L")[2].innerHTML=L;
    var Q1 = document.getElementById("EntryAngle").value; // Entry Angle in Deg
    document.getElementsByClassName("Q1")[0].innerHTML=Q1;
    document.getElementsByClassName("Q1")[1].innerHTML=Q1;
    var Q2 = document.getElementById("ExitAngle").value; // Exit Angle in Deg
    document.getElementsByClassName("Q2")[0].innerHTML=Q2;
    document.getElementsByClassName("Q2")[1].innerHTML=Q2;
    var D = document.getElementById("ProfileDepth").value; // Maximum Depth of Profile
    document.getElementsByClassName("D")[0].innerHTML=D;
    var p = document.getElementById("DesignPressure").value*98066.5;
    document.getElementById("p").innerHTML=p/98066.5;
    var pre_test = p * 1.5; // Hydrotest Pressure (1.5 X Design Pressure) N/m2
    document.getElementById("pre_test").innerHTML=pre_test/98066.5;
    var post_test = p * 1.5; // Hydrotest Pressure (1.5 X Design Pressure) N/m2
    document.getElementsByClassName("post_test")[0].innerHTML=post_test/98066.5;
    var Ld = document.getElementById("LengthODrill").value; // Length of Drill Pipe in meter
    document.getElementsByClassName("Ld")[0].innerHTML=Ld;
    document.getElementsByClassName("Ld")[1].innerHTML=Ld;
    var Wd = document.getElementById("WeightDrill").value; // Weight of Drill Pipe in KG/Meter
    document.getElementsByClassName("Wd")[0].innerHTML=Wd;
    document.getElementsByClassName("Wd")[1].innerHTML=Wd;
    var tWd = Wd*L; // Total weight of used Drill Pipe in Kg/Meter
    document.getElementsByClassName("tWd")[0].innerHTML=tWd;
    document.getElementsByClassName("tWd")[1].innerHTML=tWd;
    var f = 0.36 // Co-efficient of friction in Down hole
    document.getElementsByClassName("f")[0].innerHTML=f;
    document.getElementsByClassName("f")[1].innerHTML=f;
    document.getElementsByClassName("f")[2].innerHTML=f;
    var s = 0.2; // Static friction Co-efficient on roller
    document.getElementById("s").innerHTML=s;
    var Rw = document.getElementById("WeightReamer").value; // Reamer Weight (Maximum Considered)
    document.getElementsByClassName("Rw")[0].innerHTML=Rw;
    document.getElementsByClassName("Rw")[1].innerHTML=Rw;

    // 1.0 Cross Section Area of Pipe (As in M2)
    //Cross Section of Pipe		As = 	Π/4 (Do²-Di²)
    var CSa = (Math.PI/4)*(Do**2-Di**2);
    document.getElementsByClassName("CSa")[0].innerHTML=CSa;
    document.getElementsByClassName("CSa")[1].innerHTML=CSa;

    //2.0	MOMENT OF INERTIA (I IN M4)		
    //Moment of Inertia 		I = 	Π/64 (Do4-Di4)
    var I = (Math.PI/64)*(Do**4-Di**4);
    document.getElementsByClassName("I")[0].innerHTML=I;
    document.getElementsByClassName("I")[1].innerHTML=I;

    //3.0	WEIGHT OF ONE DRILL PIPE (W IN KG)			
    //Weight of one Drill Pipe 		W =	Ld X Wd
    var Wod = Ld*Wd;
    document.getElementsByClassName("Wod")[0].innerHTML=Wod;

    //4.0	LOAD CALCULATIONS	
    //4.1	Buoyancy of Steel Pipe in Down Hole (B IN KG/M)	
    //B =	∏/4  x  Do2  x  dm
    var B = (Math.PI/4) * Do**2 * dm;
    document.getElementsByClassName("B")[0].innerHTML=B;
    document.getElementsByClassName("B")[1].innerHTML=B;

    //4.2	Total Weight of Steel Pipe in Down Hole : (Wb in kg/m)	
    //Wb =	(Wt. of Pipe) - (Buoyancy of Pipe in Down Hole)
    var Wb = Wt - B;
    if(Wb>0){
        Wb = -Wb;
    }else{
        Wb = Wb
    }

    document.getElementsByClassName("Wb")[0].innerHTML=Wb;
    document.getElementsByClassName("Wb")[1].innerHTML=Wb;

    //4.3	Bending Moment :-( bm in NM)	
    //bm =	E I / R
    var bm = E*I / R;
    document.getElementsByClassName("bm")[0].innerHTML=bm;
    document.getElementsByClassName("bm")[1].innerHTML=bm;

    //4.4	Force due to Buoyancy:- (F1 in N)	
    //F1 =	   F x N
    //=	  f (Weight of Steel pipe in down hole x Proposed Length ) x N
    var F1 = f * -Wb * L * 9.806 ;
    document.getElementsByClassName("F1")[0].innerHTML=F1;
    document.getElementsByClassName("F1")[1].innerHTML=F1;

    //4.5	Force due to Curvature:- (F2 in N) F2 =	(4   F x Bending Moment)	/ (1/2 x 2∏ /360 (Q entry R + Q Exit R))				
    var F2 = (4*f*bm) / (Math.PI/360*((Q1*R)+(Q2*R)));
    document.getElementsByClassName("F2")[0].innerHTML=F2;
    document.getElementsByClassName("F2")[1].innerHTML=F2;

    //4.6	Force due to Cohesion:- (F3 in N)	F3 = d x ∏ x Do x L
    var F3 = d * Math.PI * Do * L;
    document.getElementsByClassName("F3")[0].innerHTML=F3;
    document.getElementsByClassName("F3")[1].innerHTML=F3;

    //4.7	Pulling Force: (F in N)	F =	F1 + F2 + F3
    var F = F1+F2+F3
    document.getElementsByClassName("F")[0].innerHTML=F;
    document.getElementsByClassName("F")[1].innerHTML=F;
    document.getElementsByClassName("F")[2].innerHTML=F;

    //4.8	Total Pulling Load: (in Kg)	=	1.5	times x	(Total Pulling force + Total Weight of Drill Pipes + Weight of Reamer)
    var tpl = 1.5* ((F/9.81) + tWd + Rw);
    var tpl_ton = tpl/1000;
    document.getElementsByClassName("tpl")[0].innerHTML=tpl/1000;

    //We are using HDD machine with 130000 Lbs pulling capacity.(1 kg =	2.20 Pound)
    // 5.0	STRESS CALCULATIONS	
    // 5.1	Maximum Allowable Stress :- (IN N/M2)	S =	90% of SMYS
    var S_PSI = 0.9 * SMYS; // in PSI
    var S_N = S_PSI * 1000000/145.072; // in N/M2
    document.getElementsByClassName("s")[0].innerHTML=S_N;
    document.getElementsByClassName("s")[1].innerHTML=S_N;

    //5.2	Bending Stress :- (IN N/M2)	Bs =	ED  /  2R
    var Bs = (E * Do) / (2 * R);
    document.getElementsByClassName("Bs")[0].innerHTML=Bs;
    document.getElementsByClassName("Bs")[1].innerHTML=Bs;
    document.getElementsByClassName("Bs")[2].innerHTML=Bs;

    //5.3	Tensile Stress :- (IN N/M2)	=	Pulling Force (N) / Cross Section Area (m2)
    var ts = F / CSa;
    document.getElementsByClassName("ts")[0].innerHTML=ts;
    document.getElementsByClassName("ts")[1].innerHTML=ts;

    // 5.3	Longitudinal Stress during Installation :- (N/M2)	=	Tensile Stress + Bending Stress
    var Ls = ts + Bs;
    document.getElementsByClassName("Ls")[0].innerHTML=Ls;

    if (Ls<S_N){
        Pulling = "SAFE"
    } else{
        Pulling = "Not SAFE"
    }
    document.getElementsByClassName("pulling_PH")[0].innerHTML=Pulling;

    // 6.0	Stress Calculations During Post Hydrotest:					
    // 6.1	Hydrostatic Test Stress :- (IN N/M2) Stress Calculations During Post Hydrotest: Bh =	PD  /  2t				
    var Bh = (post_test * Do) / (2*T); //N/m2
    document.getElementsByClassName("Bh")[0].innerHTML=Bh;
    document.getElementsByClassName("Bh")[1].innerHTML=Bh;

    // FOR Post Installation :-	Bending Stress + Hydrotest Stress
    var pi = Bs + Bh;
    document.getElementsByClassName("pi")[0].innerHTML=pi;
    document.getElementsByClassName("pi")[1].innerHTML=pi;
    if (pi<S_N){
        Pulling_PH = "SAFE"
    } else{
        Pulling_PH = "NOT SAFE"
    }
    document.getElementsByClassName("pulling_PH")[0].innerHTML=Pulling_PH;

    //  7.0	Stress Calculations For Maximum Allowable Stress Equivalent During Service: (In N/M2) S = Allowable Stress for bending	
    //  Allowable stress bending = Maximum allowable stress - hydrotest stress	
    var S = S_N - Bh; //N/M2
    document.getElementsByClassName("S")[0].innerHTML=S;
    document.getElementsByClassName("S")[1].innerHTML=S;

   //8.0	Minimum Allowable Radius of Curvature;	R =	E x Do	/ 2S	
   var r = (E*Do)/(2*S); 
   document.getElementsByClassName("r")[0].innerHTML=r;

   if (r<R){
       CR = "Less"
   } else{
       CR = "Greater"
   }
   document.getElementsByClassName("CR")[0].innerHTML=CR;
    
}



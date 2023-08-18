import QandA from './q.js'

let qNum = 0;
let score = 0;
let qt;

let QuizApp = {
    loading:`<span class="material-symbols-outlined text-8xl text-gray-300 animate-spin">progress_activity</span>`,
    startPage: `<div class="quizName text-4xl font-bold "><span class="curlyBraces text-[#EB5160]">{</span><span class="text-[#DFE0E2]">dev</span><span class="curlyBraces text-[#EB5160]">}</span><span class="text-[#DFE0E2]">    quiz</span></div><button class="startGame w-72 mt-10 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">Start Game</button><button class="highScore w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">High Score</button>`,

    selectQuiz: `<div class="selectQuiz flex justify-center items-center flex-col"><div class="header text-[#DFE0E2] text-4xl">--SELECT QUIZ--</div><button class="general w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">General</button><button class="js w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">JavaScript</button><button class="html w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">HTML</button><button class="css w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">CSS</button><button class="cpp w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">C++</button><button class="python w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">Python</button></div>`,
    startGame(){
        document.querySelector('.startPage').innerHTML=this.loading;
        let timer = 0;
        let interValId;

        interValId = setInterval(()=>{
            timer++;
            if(timer >= 1){
                document.querySelector('.startPage').innerHTML = this.selectQuiz;
                document.querySelectorAll("button").forEach((btn) =>{
                    btn.addEventListener("click",(e)=>{
                        if(btn.innerText == "General"){
                            qt="gen";
                        }else if(btn.innerText == "Javascript"){
                            qt="js";
                        }else if(btn.innerText == "Python"){
                            qt="python";
                        }else if(btn.innerText == "CSS"){
                            qt="css";
                        }else if(btn.innerText == "C++"){
                            qt = "cpp";
                        }else if(btn.innerText == "html"){
                            qt = "html";
                        }

                        QuizApp.getGenQuestion(qt);
                    });
                });
                // document.querySelector('.general').addEventListener('click',this.getGenQuestion);
                clearInterval(interValId);
            }
        },1000)
        
    },
    loadFor3s(){
        let timer = 0;
        let interValId;
        interValId = setInterval(()=>{
            timer++;
            if(timer >= 1){
                document.querySelector('.startPage').innerHTML = this.startPage;
                document.querySelector('.startGame').addEventListener('click',(e)=>{
                    e.preventDefault();
                    this.startGame();
                })
                clearInterval(interValId);
            }
        },1000)
    },

    getGenQuestion(qType){
        let elements =`
        <div class="questionAndScore flex flex-row gap-[7rem] lg:w-[30rem] items-center text-2xl justify-between">
            <div class="questionNum text-[#DFE0E2]">
                Question: ${qNum}/10
            </div>
            <div class="score text-[#DFE0E2]">
                Score: ${score}
            </div>
        </div>

        <div class="flex flex-col px-5 font-Montserrat justify-center items-center">
            <div class="question text-gray-200 text-2xl py-5 lg:w-[30rem]">
                ${QandA[qType][qNum].q}
            </div>
        <div class="options flex flex-col text-[#DFE0E2">
            <button class="opA w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[0]}</button>
            <button class="opB w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[1]}</button>
            <button class="opC w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[2]}</button>
            <button class="opD w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[3]}</button>
        </div>
        </div>`;
    document.querySelector('.startPage').innerHTML = elements;
    document.querySelectorAll("button").forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            e.preventDefault();
            if((btn.innerText).toUpperCase() === (QandA.gen[qNum].qrAns).toUpperCase()){
                btn.classList.replace("hover:bg-[#AAAAAA]","hover:bg-green-500");
                score += 10;
            }else{
                btn.classList.replace("hover:bg-[#AAAAAA]","hover:bg-red-500");
            }

            let j = 0;
            let interValId = setInterval(() =>{
                j++;
                if(j>=1){
                    clearInterval(interValId);
                    QuizApp.gotoNextQuestion();
                }
            },1000);
           
        })
    })
    },
    gotoNextQuestion(){
        if(qNum<10){
            qNum++;
            this.getGenQuestion(qt);
        }
        
    },
    getPoints(){

    },
    isCorrect(){


    },
}

QuizApp.loadFor3s();











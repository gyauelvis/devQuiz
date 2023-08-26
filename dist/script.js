import QandA from './q.js'

let qNum = 0,score = 0,finalScore = 0,qt,page = document.querySelector('.startPage'), arrayOfUserAnswers = [],num = 0;
let highScores =[];

let QuizApp = {
    loading:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwUlEQVR4nO1ZTU8UQRCdRKOe9Kxiokb9BwKCiYloQqKwVZvsCdmqVeRmIsjH0YMf6D8QIh6ECyEkinjE/6AXBFETBHG7B1QwrB7ImprpGRZ2YZc47DJmX1JJp2e2u1/Xq56qXssqo4wySob5hmsnNFCrmLStMMIGJg2c0shpx4BT0meFCd+iiZOycAW0qpAGHANa1cArofKMFjkhpxXwc69PyLh9dNMKHRGkAa9PAQ+Gjsi8E+RGWsCDrhlpReh4rt/Y2FKhgYYV0pKxERXl04EvLh2L7VPIjzXwV4U0p5B7pC9PsK9kBPuKjfH4ZiQU0IL/rjHps2Pxo4ESUUCPsiZCerjVb2T3RUpim3lCIJ5wx6RXsnAxDTxm5hkKlgjSnAycjHBNMkq1hshcQGMvyXh2xu4vRPiY8cqPIObIJhKlWp8I8GwwY/NPhwi2VBSBCPdslJYGehDM2DRi4mhMyJjAf23mGLZ2INh7nEAHnhUSWwX7dqCg+YxCtnMFe7LhxikrTHACHHlIZOZIDWg4dCTKKKMEsJGqFSbaxOzGRJUVNizGWg/5R/C6I5/H5Nl2B2qV9GJbPwwI2pBQyN81cq+YaUtGMbodEh8zdmK6mGRspGqPRGaOJlm1R8aGeGXB9YQGfquR3hW7jtBRumPmfJL1zPWOpEfthRNxSBSfiAJuN0rozVobcp/rrURbYdJCnl6TFn2w65sOWkWC3Zio8qWVUePLXYAkkWZdZwsaTMg4tQRySzFJePDqERMT4oU+j4QCfmmFBYuykUijOYq5F6XY2H+GDfFK94NItwuWUxllrEFB4qoCGtfIvzTQsrQV0hUrTNDI97NyKvSP/ntWWDxhFvxbI3cobDospoE6TV86cM8kkeoV0BeFNCPtIMZUwG/M7ndsfKYj1GWyivEg5lqbFGkm4zyf2erd9IW7e23ky5JuiNnRxCXp2+xOS7xgbSTSeP2ImWupJESSkDivgaZyaH5S7sRKTiQp0kKa2UpaDgmjbZOvObWEn7sBp+S20ifinlRyf9WZRQS5e0eklQ8inQxPPJ2qv7XfeyZtjdRvdvi9JzMJZD/YI9TleMH1RLcC/rMjwZ4PEhOeJzJJePhMdMAv2CJU5/XLEburjl9tCqJcdUS+wkh2XYnMgJZL/kEskEhfwRVeqSBHbF5pIX8y71y0divSEuzIk0bb/bLwDfHxzHhjItc3ZVfB/e/EHL9uYPcaObmeAE4tQPM5KwxIRrhGjtjsvwl4IjQk1sksQnXedae007HYHv+FMv5z/AX1u7rsGeHtxQAAAABJRU5ErkJggg==" class="animate-spin">`,
    
    startPage:`<div class="quizName text-4xl font-bold "><span class="curlyBraces text-[#EB5160]">{</span><span class="text-[#DFE0E2]">dev</span><span class="curlyBraces text-[#EB5160]">}</span><span class="text-[#DFE0E2]">    quiz</span></div><button class="startGame w-72 mt-10 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">Start Game</button><button class="highScore w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">High Score</button>`,

    selectQuiz: `<div class="selectQuiz flex justify-center items-center flex-col"><div class="header text-[#DFE0E2] text-4xl">--SELECT QUIZ--</div><button class="general w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">General</button><button class="js w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">JavaScript</button><button class="html w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">HTML</button><button class="css w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">CSS</button><button class="cpp w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">C++</button><button class="python w-72 mt-5 h-12 text-2xl bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">Python</button></div>`,
    
    finalScorePage:`
    <div class="fPage flex justify-center items-center flex-col">
        <div class="finalScore text-[#DFE0E2] text-4xl">
            Final Score
        </div>
        <div class="points text-[#DFE0E2] text-4xl">
            ${finalScore}
        </div>
        
        <div class="input_username">
            <input type="text" placeholder="enter your name" id="userName" class="w-[21rem] lg:w-[30rem] mt-6 h-12 hover:outline-none text-lg bg-[#DFE0E2] border-2 placeholder:text-gray-500 px-4
            border-[#EB5160] ease-in-out transition-colors delay-150">
        </div>
        <div class="buttons flex flex-col items-center">
        <button class="save w-[21rem] lg:w-[30rem] mt-6 h-12 text-lg bg-[#DFE0E2] text-black hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150 rounded opacity-50 cursor-not-allowed">
            Save
        </button>
        <button class="play_again w-[21rem] lg:w-[30rem] mt-6 h-12 text-lg bg-[#DFE0E2] text-black hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">
            Play Again
        </button>
        <button class="review_quiz w-[21rem] lg:w-[30rem] mt-6 h-12 text-lg bg-[#DFE0E2] text-black hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">
            Review Quiz
        </button>
        <button class="select_newquiz w-[21rem] lg:w-[30rem] mt-6 h-12 text-lg bg-[#DFE0E2] text-black hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">
            Select New Quiz
        </button>
        <button class="go_home w-[21rem] lg:w-[30rem] mt-6 h-12 text-lg bg-[#DFE0E2] text-black hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">
            Go Home
        </button>
        </div>
    </div>  `,

    questions_placeholder:``,
    startGame(){
        page.innerHTML=this.loading;
        let timer = 0;
        let interValId;

        interValId = setInterval(()=>{
            timer++;
            if(timer >= 1){
                page.innerHTML = this.selectQuiz;
                document.querySelectorAll("button").forEach((btn) =>{
                    btn.addEventListener("click",(e)=>{
                        if(btn.innerText == "General"){
                            qt="gen";
                        }else if(btn.innerText == "JavaScript"){
                            qt="js";
                        }else if(btn.innerText == "Python"){
                            qt="python";
                        }else if(btn.innerText == "CSS"){
                            qt="css";
                        }else if(btn.innerText == "C++"){
                            qt = "cpp";
                        }else if(btn.innerText == "HTML"){
                            qt = "html";
                        }

                        QuizApp.getGenQuestion(qt);
                    });
                });
                
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
                page.innerHTML = this.startPage;
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
                Question: ${qNum+1}/10
            </div>
            <div class="score text-[#DFE0E2]">
                Score: ${score}
            </div>
        </div>

        <div class="flex flex-col px-5 font-Montserrat justify-center items-center">
            <div class="question text-gray-200 text-2xl py-5 lg:w-[30rem]">
                ${(QandA[qType])[qNum].q}
            </div>
        <div class="options flex flex-col text-[#DFE0E2">
            <button class="opA w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[0]}</button>
            <button class="opB w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[1]}</button>
            <button class="opC w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[2]}</button>
            <button class="opD w-[21rem] lg:w-[30rem] mt-6 h-14 text-lg bg-[#DFE0E2] hover:bg-[#AAAAAA] ease-in-out transition-colors delay-150">${QandA[qType][qNum].qAns[3]}</button>
        </div>
        </div>`;
    page.innerHTML = elements;
    document.querySelectorAll("button").forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            e.preventDefault();
            arrayOfUserAnswers[qNum] = btn.innerText;
            if((btn.innerText).toUpperCase() === (QandA[qType][qNum].qrAns).toUpperCase()){
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
                    if(qNum <= 9){
                        QuizApp.gotoNextQuestion();
                    }
                }
            },1000);
           
        })
    })
    },

    endPage(){
            finalScore = score;
            page.innerHTML = this.finalScorePage;
            document.querySelector('.points').textContent = finalScore;
            document.querySelector('.play_again').addEventListener('click',(e) =>{
                score = 0;
                this.playAgain(qt);
            });
            document.querySelector('.select_newquiz').addEventListener('click',(e) =>{
                score = 0;
                this.startGame();
            });
            document.querySelector('.go_home').addEventListener('click',(e) =>{
                score = 0;
                page.innerHTML = this.loading;
                this.loadFor3s();
            });

            document.querySelector('.save').addEventListener('mouseover',(e)=>{
                if(QuizApp.isInputEmpty()){
                    document.querySelector('.save').classList.remove('opacity-50');
                    document.querySelector('.save').classList.remove('cursor-not-allowed');
                    console.log('done');
                }else{
                    document.querySelector('.save').classList.add('opacity-50');
                    document.querySelector('.save').classList.add('cursor-not-allowed');
                }
            });

            document.querySelector('.save').addEventListener("click",(e)=>{
                e.preventDefault();
                if(QuizApp.isInputEmpty()){
                    
                    QuizApp.playerInfo(document.getElementById('userName').value);
                }
            })


            document.querySelector('.review_quiz').addEventListener('click', (e)=>{
                e.preventDefault();
                QuizApp.reviewQuiz(qt);
            })
    },

    gotoNextQuestion(){
        if(qNum<9){
            qNum++;
            this.getGenQuestion(qt);
        }else{
            this.endPage();
            
            qNum = 0;
           
        }
        
    },

    playAgain(qType){
            this.getGenQuestion(qType);
    },

    isInputEmpty(){
        let userName = document.getElementById('userName');
        if(userName.value === '') {
            return false;
        }else{
            return true;
        }
    },

    reviewQuiz(qType){

        let revHolder =`

        <div class="close back material-symbols-outlined text-[#EB5160] text-lg">
                close
        </div>

        <div class="rewiewQuiz flex flex-col px-5 font-Montserrat items-start w-90% lg:w-[30rem] relative">
        <div class="revQuestion text-gray-200 text-2xl py-5">
            ${(QandA[qType])[num].q}
        </div>

        <div class="your_answer flex flex-col py-2">
            <span class="font-bold text-xl text-[#EB5160]">
                Your Answer
            </span>
            <span class="text-gray-50 py-1 text-lg">
                ${arrayOfUserAnswers[num]}
            </span>
        </div>

        <div class="correct_answer text-green-500 flex flex-col py-2">
            <span class="font-bold text-xl text-[#EB5160]">
            Correct Answer
            </span>
            <span class="py-1 text-lg">
                ${QandA[qType][num].qrAns}
            </span>
        </div>

        <div class="backAndForthButtons text-gray-200 flex flex-row justify-between items-center w-[90%] py-5">
            <button class="back material-symbols-outlined">
                arrow_back_ios_new
            </button>
            <button class="front material-symbols-outlined">
                arrow_forward_ios
            </button>
        </div>
    </div>`
    page.innerHTML = revHolder;
    document.querySelector(".back").addEventListener("click",(e)=>{
        e.preventDefault();
        QuizApp.goBack();
    });
    document.querySelector(".front").addEventListener("click",(e)=>{
        e.preventDefault();
        QuizApp.goForward();
    });
    document.querySelector(".close").addEventListener("click",(e)=>{
        e.preventDefault();
        this.closeRev();
    });
    },

    goForward(){
        if(num<9){
            num++;
            this.reviewQuiz(qt);
        }

    },
    goBack(){
        if(num>0){
            num--;
            this.reviewQuiz(qt);
        }
    },
    closeRev() {
        this.endPage();
    },

    playerInfo(username){
        let userInfo = {
            score: this.finalScore,
            name: username,
            quizTitle: qt,
        }
        return userInfo;
    },

    insertInArray(userObj){
        if(highScores.length != 0){
            highScores.forEach((highScore)=>{
                if(highScore.score < userObj.score){
                    highScores.indexOf(highScore)
                }
            })

        }else{
            highScores.push(userObj);
        }
    }


}

// QuizApp.loadFor3s();











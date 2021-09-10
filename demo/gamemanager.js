class GameManager {
    constructor(_limit) {
        this.quizs = [];
        this.current = 0;
        this.limit = _limit;
    }
    checkAnswer(ans){
        if(ans === this.quizs[this.current].correct){
            return true;
        }else {
            return false;
        }
    }
    chooseAnswer(ans){
       if(this.checkAnswer(ans)){
           alert("Bạn đã trả lời đúng")

       } else {
           alert("Bạn đã trả lời sai")
       }
    }
    nextQuiz(){
        if(this.current < this.limit-1){
            this.current++;
        } else {
            alert("Chúc mừng bạn đã hoàn thành !");
            this.current = 0;
        }
    }
    endGame(){
        alert("Chúc bạn may mắn lần sau.");
        this.nextGame();
    }
    nextGame(){
        this.current = 0;
    }
    addQuiz(quiz){
        this.quizs.push(quiz);
    }
    deleteQuiz(index){
        this.quizs.splice(index,1);
    }
}
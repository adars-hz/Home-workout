const exercises = {
    monday: [
        { name: "Ankle Jump", photo: "image/Ankle jump.gif", timer: true },
        { name: "Running", photo: "image/running.gif", timer: true },
        { name: "Neck rotation", photo: "image/neck rotation.gif", timer: false },
        { name: "Hip rotation", photo: "image/Hip rotation.gif", timer: false },
        { name: "Sholder Rotation", photo: "image/Sholder Rotation.gif", timer: false },
        { name: "Jumping Jacks", photo: "image/Jumping Jacks.gif", breathing: "Inhale in jump, exhale as you return", timer: true },
        { name: "Bent Over Twist", photo: "image/Bent Over Twist.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "push up", photo: "image/push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Squats", photo: "image/Squat.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Sumo Squats", photo: "image/Sumo Squat .gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Incline pushup", photo: "image/Incline pushup.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Cobra pose", photo: "image/Cobra pose.jpg", timer: true }
    ],
    tuesday: [
        { name: "Ankle Jump", photo: "image/Ankle jump.gif", timer: true },
        { name: "Running", photo: "image/running.gif", timer: true },
        { name: "Neck rotation", photo: "image/neck rotation.gif", timer: false },
        { name: "Hip rotation", photo: "image/Hip rotation.gif", timer: false },
        { name: "Sholder Rotation", photo: "image/Sholder Rotation.gif", timer: false },
        { name: "Jumping Jacks", photo: "image/Jumping Jacks.gif", breathing: "Inhale in jump, exhale as you return", timer: true },
        { name: "Bent Over Twist", photo: "image/Bent Over Twist.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "push up", photo: "image/push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Squats", photo: "image/Squat.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Sumo Squats", photo: "image/Sumo Squat .gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Mountain climb", photo: "image/mountain climb.gif", breathing: "Inhale when lift, exhale as you return", timer: false },
        { name: "Seated Knee Tucks", photo: "image/Seated Knee Tucks.gif", breathing: "Inhale in extend, exhale as you return", timer: false },
        { name: "russian twist", photo: "image/russian twist.gif", breathing: "Inhale in twist, exhale as you return", timer: false },
        { name: "Cobra pose", photo: "image/Cobra pose.jpg", timer: true }
    ],
    wednesday: [
        { name: "Ankle Jump", photo: "image/Ankle jump.gif", timer: true },
        { name: "Running", photo: "image/running.gif", timer: true },
        { name: "Neck rotation", photo: "image/neck rotation.gif", timer: false },
        { name: "Hip rotation", photo: "image/Hip rotation.gif", timer: false },
        { name: "Sholder Rotation", photo: "image/Sholder Rotation.gif", timer: false },
        { name: "Jumping Jacks", photo: "image/Jumping Jacks.gif", breathing: "Inhale in jump, exhale as you return", timer: true },
        { name: "Bent Over Twist", photo: "image/Bent Over Twist.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "push up", photo: "image/push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Squats", photo: "image/Squat.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Sumo Squats", photo: "image/Sumo Squat .gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Incline pushup", photo: "image/Incline pushup.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Cross Mountain climb", photo: "image/cross mountain climb.gif", breathing: "Inhale when lift, exhale as you return", timer: false },
        { name: "hindu push up", photo: "image/hindu push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Situp", photo: "image/situp.gif", breathing: "Inhale in down, exhale in lift", timer: false },
        { name: "Cobra pose", photo: "image/Cobra pose.jpg", timer: true }
    ],
    thursday: [
        { name: "Ankle Jump", photo: "image/Ankle jump.gif", timer: true },
        { name: "Running", photo: "image/running.gif", timer: true },
        { name: "Neck rotation", photo: "image/neck rotation.gif", timer: false },
        { name: "Hip rotation", photo: "image/Hip rotation.gif", timer: false },
        { name: "Sholder Rotation", photo: "image/Sholder Rotation.gif", timer: false },
        { name: "Jumping Jacks", photo: "image/Jumping Jacks.gif", breathing: "Inhale in jump, exhale as you return", timer: true },
        { name: "Bent Over Twist", photo: "image/Bent Over Twist.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "push up", photo: "image/push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Squats", photo: "image/Squat.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Sumo Squats", photo: "image/Sumo Squat .gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Mountain climb", photo: "image/mountain climb.gif", breathing: "Inhale when lift, exhale as you return", timer: false },
        { name: "Seated Knee Tucks", photo: "image/Seated Knee Tucks.gif", breathing: "Inhale in extend, exhale as you return", timer: false },
        { name: "russian twist", photo: "image/russian twist.gif", breathing: "Inhale in twist, exhale as you return", timer: false },
        { name: "Cobra pose", photo: "image/Cobra pose.jpg", timer: true }
    ],
    saturday: [
        { name: "Ankle Jump", photo: "image/Ankle jump.gif", timer: true },
        { name: "Running", photo: "image/running.gif", timer: true },
        { name: "Neck rotation", photo: "image/neck rotation.gif", timer: false },
        { name: "Hip rotation", photo: "image/Hip rotation.gif", timer: false },
        { name: "Sholder Rotation", photo: "image/Sholder Rotation.gif", timer: false },
        { name: "Jumping Jacks", photo: "image/Jumping Jacks.gif", breathing: "Inhale in jump, exhale as you return", timer: true },
        { name: "Bent Over Twist", photo: "image/Bent Over Twist.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "push up", photo: "image/push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Squats", photo: "image/Squat.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Sumo Squats", photo: "image/Sumo Squat .gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Mountain climb", photo: "image/mountain climb.gif", breathing: "Inhale when lift, exhale as you return", timer: false },
        { name: "Seated Knee Tucks", photo: "image/Seated Knee Tucks.gif", breathing: "Inhale in extend, exhale as you return", timer: false },
        { name: "russian twist", photo: "image/russian twist.gif", breathing: "Inhale in twist, exhale as you return", timer: false },
        { name: "Cobra pose", photo: "image/Cobra pose.jpg", timer: true }
    ],
    sunday: [
        { name: "Ankle Jump", photo: "image/Ankle jump.gif", timer: true },
        { name: "Running", photo: "image/running.gif", timer: true },
        { name: "Neck rotation", photo: "image/neck rotation.gif", timer: false },
        { name: "Hip rotation", photo: "image/Hip rotation.gif", timer: false },
        { name: "Sholder Rotation", photo: "image/Sholder Rotation.gif", timer: false },
        { name: "Jumping Jacks", photo: "image/Jumping Jacks.gif", breathing: "Inhale in jump, exhale as you return", timer: true },
        { name: "Bent Over Twist", photo: "image/Bent Over Twist.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "push up", photo: "image/push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Squats", photo: "image/Squat.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Sumo Squats", photo: "image/Sumo Squat .gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Incline pushup", photo: "image/Incline pushup.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Cross Mountain climb", photo: "image/cross mountain climb.gif", breathing: "Inhale when lift, exhale as you return", timer: false },
        { name: "hindu push up", photo: "image/hindu push up.gif", breathing: "Inhale in down, exhale as you return", timer: false },
        { name: "Situp", photo: "image/situp.gif", breathing: "Inhale in down, exhale in lift", timer: false },
        { name: "Cobra pose", photo: "image/Cobra pose.jpg", timer: true }
    ]
};

const restDay = 'Friday'; // Mark Friday as a rest day

let currentDay = 'monday';
let currentExerciseIndex = 0;
let timer;
let timerActive = false;
let remainingTime = 0;

function startWorkout() {
    currentDay = document.getElementById('day-select').value;

    if (currentDay.toLowerCase() === restDay.toLowerCase()) {
        alert('Today is a rest day. No workout scheduled!');
        document.getElementById('workout-screen').style.display = 'none';
        document.getElementById('schedule-screen').style.display = 'block';
        return;
    }

    currentExerciseIndex = 0;
    showWorkoutScreen();
}

function showWorkoutScreen() {
    const workout = exercises[currentDay][currentExerciseIndex];
    document.getElementById('exercise-name').innerText = workout.name;
    document.getElementById('exercise-photo').src = workout.photo;
    document.getElementById('breathing-rule').innerText = workout.breathing || '';

    if (workout.timer) {
        document.getElementById('timer-container').style.display = 'block';
        document.getElementById('reps-container').style.display = 'none';
        resetTimer(); // Reset timer when starting new exercise
    } else {
        document.getElementById('timer-container').style.display = 'none';
        document.getElementById('reps-container').style.display = 'block';
    }

    document.getElementById('workout-screen').style.display = 'block';
    document.getElementById('schedule-screen').style.display = 'none';
}

function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex >= exercises[currentDay].length) {
        alert('Workout complete for today!');
        document.getElementById('workout-screen').style.display = 'none';
        document.getElementById('schedule-screen').style.display = 'block';
    } else {
        showWorkoutScreen();
    }
}

function startTimer() {
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
    remainingTime = minutes * 60 + seconds;

    if (timerActive) clearInterval(timer);

    timer = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timer);
            timerActive = false;
            document.getElementById('timer-display').innerText = 'Timer: 00:00';
            return;
        }
        remainingTime--;
        document.getElementById('timer-display').innerText = formatTime(remainingTime);
    }, 1000);
    
    timerActive = true;
}

function pauseTimer() {
    clearInterval(timer);
    timerActive = false;
}

function resumeTimer() {
    if (!timerActive) startTimer();
}

function resetTimer() {
    clearInterval(timer);
    timerActive = false;
    remainingTime = 0;
    document.getElementById('timer-display').innerText = 'Timer: 00:00';
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `Timer: ${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

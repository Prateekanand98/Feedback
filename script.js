let selectedFeedback = '';

function selectFeedback(feedback) {
    selectedFeedback = feedback;

    // Reset all feedback options' styles
    document.querySelectorAll('.feedback-option').forEach(option => {
        option.style.border = 'none';
    });

    // Highlight selected feedback
    document.getElementById(feedback.toLowerCase()).style.border = '2px solid #008c7a';

    // Enable the send review button
    document.getElementById('send-review').disabled = false;
}

function sendReview() {
    if (selectedFeedback) {
        document.getElementById('feedback-container').style.display = 'none';
        document.getElementById('selected-feedback').textContent = `Feedback: ${selectedFeedback}`;
        document.getElementById('thank-you-container').style.display = 'block';
    }
}

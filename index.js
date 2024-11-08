function createResume() {
    document.getElementById('displayName').innerText = document.getElementById('name').value;
    document.getElementById('displayEmail').innerText = document.getElementById('email').value;
    document.getElementById('displayPhone').innerText = document.getElementById('phone').value;

    const linkedinProfile = document.getElementById('linkedin').value;
    const githubProfile = document.getElementById('github').value;

    document.getElementById('displayLinkedIn').innerText = linkedinProfile;
    document.getElementById('displayLinkedIn').href = linkedinProfile;
    
    document.getElementById('displayGitHub').innerText = githubProfile;
    document.getElementById('displayGitHub').href = githubProfile;

    document.getElementById('displayExperience').innerText = document.getElementById('experience').value;
    document.getElementById('displayEducation').innerText = document.getElementById('education').value;

    const photoInput = document.getElementById('photo');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayPhoto').src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    document.getElementById('resumeForm').style.display = 'none';
    document.getElementById('resumePreview').style.display = 'block';
}

function saveAsPDF() {
    const resumeElement = document.getElementById('resumeContent');
    html2pdf().from(resumeElement).save('My_Resume.pdf');
}

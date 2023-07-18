import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

var newInput = document.getElementById("new-input");
var confirmInput = document.getElementById("confirm-input");
var newSpan = document.getElementById("new-span");
var confirmSpan = document.getElementById("confirm-span");
var submitBtn = document.getElementById("submit-btn");
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Create a single supabase client for interacting with your database
const client = createClient(
  "https://wttcleqksbmoawwaeysa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0dGNsZXFrc2Jtb2F3d2FleXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDUxNjIsImV4cCI6MjAwMzU4MTE2Mn0.fsWVLqquvP1AhWiDE7JNhOuKTGYxB8dhHTtNUdDjHIY"
);

newInput.onkeyup = function () {
  if (this.value.length < 8) {
    newSpan.style.display = "block";
  } else {
    newSpan.style.display = "none";
  }
};

confirmInput.onkeyup = function () {
  if (this.value != newInput.value) {
    confirmSpan.style.display = "block";
  } else {
    confirmSpan.style.display = "none";
  }
};

submitBtn.onclick = async function () {
  if (newInput.value.length >= 8 && confirmInput.value == newInput.value) {
    const { data, error } = await client.auth.updateUser({
        password: newInput.value,
      });

    console.log(data);
  }
  return;
};

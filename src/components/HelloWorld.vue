<template>
  <div class="homePg mx-auto ">
    <div class="xlogo mx-auto">
      <img class="xl" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="X logo">
    </div>
    <div class="mainTxt mx-auto">
      <div class="bldTxt">
        <h1 class="text-start">Happening now</h1>
        <h3 class="mt-5 mb-4 text-start">Join today.</h3>
      </div>
      <div class="signUpBtn">
        <button class="bTn bg-light d-block"><img class="coyLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt="">Sign up with Google</button>
        <button class="bTn bg-light d-block mt-2"><img class="coyLogo"
            src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="">Sign up with Apple</button>
      </div>
      <div class="opt d-flex">
        <hr>
        <p>or</p>
        <hr>
      </div>

      <button class="bTn bg-primary text-light d-block" data-bs-toggle="modal" data-bs-target="#signupModal">Create
        account</button>
      <small class="d-block text-start mt-2" style="width: 60%; font-size:0.7rem; ">By signing up, you agree to the <span
          class="text-primary"> Terms of Service</span> and <span class="text-primary">Privacy Policy</span>, including
        <span>Cookie Use</span>.</small>

      <div class="signInbtn mt-5">
        <h5 class="text-start fw-bold">Already have an account?</h5>
        <button class="bTn d-block bg-light text-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Sign
          in</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}

</script>

<style>
  .homePg{
    display: flex;
    justify-content:space-between ;
    padding-top: 3rem;
  }
  .xlogo{
    flex-basis: 40%;
  }
  .xl{
    width: 80%;
    padding-top: 3rem;
    margin-top: 3rem;
  }
  .bldTxt h1{
    font-size: 3.75em;
    font-weight:900;
  }    
  .bldTxt h3{
    font-size: 2rem;
    font-weight:900;
  }
  .bTn{
    padding: 0.7rem 4rem;
    font-size: 16px;
    border-radius: 30px 30px 30px 30px;
    border: 0.6rem;
    cursor: pointer;
    transition: all 0.5s;
    vertical-align: middle;
    width: 65%;
  }
  .coyLogo{
    width: 20px;
  }
  hr{
    border-style:double;
    border-color: #b2bdbd;
    border-width: 3px;
    height: 0px;
    margin: 10px auto;
    width: 30%;
  }
  span:hover{
    cursor: pointer;
    text-decoration: underline;
  }

</style>

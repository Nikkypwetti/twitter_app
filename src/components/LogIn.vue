<template>
    <!-- Login Modal  -->
<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header d-flex">
          <img class="mx-auto" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="" style="width: 50px;">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <!-- <h1 class="modal-title fs-5 mx-auto ps-5" id="staticBackdropLabel">Create your account</h1> -->
      </div>
      <div class="modal-body mx-auto" style="width: 80%;">
           <div class="mbHeader">
             <h2 class="fw-bolder">Sign in to X</h2>

             <div class="signInBtn">
            <button class="bTn bg-light d-block  mx-auto" style="width: 75%;"><img class="coyLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="">Sign in with Google</button>
            <button class="bTn bg-light d-block mt-2 mx-auto" style="width: 75%;"><img class="coyLogo" src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="">Sign in with Apple</button>
               </div>   
               <div class="opt d-flex">
                 <hr class="w-25 mx-auto">
                   <p class="mx-auto">or</p>
                  <hr class="w-25 mx-auto">
                </div>

             <form>
                <div class="form-group mt-3">
                    <input type="text" class="form-control mx-auto" placeholder="Username" name="username" style="height: 4rem; width: 75%;" />
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control mx-auto" placeholder="Password" name="password" style="height: 4rem; width: 75%;"/>
                </div>

            <div class="form-group mt-5">
             <button type="submit" class="bTn bg-dark text-light bg-secondary text-center px-2" style="width: 75%;">
                  Login
             </button>
             </div>
          </form>

          <button class="bTn mt-3" style="width: 75%;">Forgot Password?</button>

          <div class="mbFooter mt-4">
            <p>Don't have an account? <span class="text-primary" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</span></p>
          </div>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
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
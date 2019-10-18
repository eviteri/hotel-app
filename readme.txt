############################
#         Variables        #
############################

$color-primary: #f9ed69; //yellow color
$color-secondary: #f08a5d; //orange
$color-tertiary: #b83b5e; //pink

nav{
    margin: 30px;
    background-color: $color-primary;
}

############################
#             &            #
############################

it writes the selector path up until this point

.navigation{
    list-style: none;
    li{
        display: inline-block;
        margin-left: 30px;

        &:first-child{
            margin: 0;
        }
    }
}

Equivalent to: 
.navigation li:first-child{
    margin: 0;
}

############################
#  Darken color on hover   #
############################

darken: is a function already pre built in scss

.btn-main{
    &:link{
        background-color: $color-secondary;
    }
    &:hover{
        background-color: darken($color-secondary, 15%);
    }
}

lighten: is a function already pre built in scss

.btn-hot{
    &:link{
        background-color: $color-tertiary;
    }
    &:hover{
        background-color: lighten($color-tertiary, 10%);
    }
}
##############
#    Mixins  #
##############

//Declaring
@mixin clearfix {
    &::after{
        content: "";
        clear: both;
        display: table;
    }
}

//Using it
nav{
    margin: 30px;
    background-color: $color-primary;
    @include clearfix;
}

############################
#   Mixins with Arguments  #
############################

@mixin style-link-text($color){
    text-decoration: none;
    text-transform: uppercase;
    color: $color;
}

.btn-hot:link{
    padding: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    width: $width-button;
    @include style-link-text($color-text-light);
}

############################
#        Functions         #
############################

@function divide($a, $b){
    @return $a / $b;
}

nav{
    margin: divide(60,2) * 1px; //30px
    background-color: $color-primary;
}

############################
#        % Extends         #
############################

The selector is copy into the rule. With Mixins the mixin is copy into the selector

//Rule
%btn-placeholder{
    padding: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    width: $width-button;
    @include style-link-text($color-text-light);
}

//Selector
.btn-main{
    &:link{
        @extend %btn-placeholder;
        background-color: $color-secondary;
    }
    &:hover{
        background-color: darken($color-secondary, 15%);
    }
}

###############################
#   USING THE COMMAND LINE    #
###############################
Install SASS
------------
$ npm init

$ npm install node-sass  --save-dev

//Write cusotm script in package.json

"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"
},

//Run command 
$ npm run compile:sass

//Auto Reload
$ npm install -g live-server

$ live-server

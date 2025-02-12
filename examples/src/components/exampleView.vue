<template>
    <div class="">
        <wd-form label="formLabel" labelPosition="left" width="600">
            <wd-form-item label="select"><span>{{ testSelect }}</span>
                <wd-select name="123" id="2" v-model="testSelect">
                    <wd-option value="0" text="哈哈哈"></wd-option>
                    <wd-option value="1" text="111"></wd-option>
                    <wd-option value="2" text="222"></wd-option>
                </wd-select>
                
            </wd-form-item>
            <wd-form-item label="账号" height="50" required>
                <wd-input type="text" v-model="input1" placeholder="输入账号"/>
            </wd-form-item>
            <wd-form-item label="密码">
                <wd-input type="text" v-model="input2" required placeholder="输入密码"/>
            </wd-form-item>
            <wd-form-item label="family" height="100">
                 <wd-checkbox-group>
                    <wd-checkbox v-model="checkbox1">dad</wd-checkbox>
                    <wd-checkbox v-model="checkbox2">mom</wd-checkbox>
                    <wd-checkbox v-model="checkbox3">grandma</wd-checkbox>
                    <wd-checkbox v-model="checkbox3">grandma</wd-checkbox>
                    <wd-checkbox v-model="checkbox3">grandma</wd-checkbox>
                 </wd-checkbox-group>
            </wd-form-item>
            <wd-form-item label="formRadio1">
                <wd-radio-group name="radio2">
                    <wd-radio value="male" v-model="radio2">male</wd-radio>
                    <wd-radio value="female" v-model="radio2">female</wd-radio>
                    <wd-radio value="they/them" v-model="radio2">they/them</wd-radio>{{ radio2 }}
                </wd-radio-group>
            </wd-form-item>
            <wd-form-item label="sh">
                <wd-switch size="small"></wd-switch>
            </wd-form-item>
            <wd-form-item label="11">
                <wd-slidebar size="small" min="0" max="100" width="200" v-model="slidebarvalue1">123</wd-slidebar>
            </wd-form-item>
        </wd-form>
    </div>
    <div class="">
        <div>{{ input1 }}</div>
        <div>{{ input2 }}</div>
        
    </div>
    <div style="display: flex;">
        <wd-button-group>
            <wd-button size="medium" type="danger"></wd-button>
            <wd-button size="medium" type='success'></wd-button>
            <wd-button size="medium" type="info"></wd-button>
            <wd-button size="medium" type="warning"></wd-button>
            <wd-button size="medium" type="text"></wd-button>
            <wd-button size="medium"></wd-button>
        </wd-button-group>
        <br>
        <br>
        <wd-button-group>
            <wd-button size="tiny"></wd-button>
            <wd-button size="mini"></wd-button>
            <wd-button size="small"></wd-button>
            <wd-button size="medium"></wd-button>
            <wd-button size="large" ></wd-button>
            <wd-button size="huge"></wd-button>
        </wd-button-group>
        <br>
        <br>
        <div>
            <wd-button size="medium" type="info" round>round</wd-button>
            <wd-button size="medium" circle>圆</wd-button>
            <wd-button size="medium" type="danger" disabled>disabled</wd-button>
        </div>
    
    </div>
    <br>
    <div class="" style="display: flex;">
        <div class="">
            <wd-joystick @value="a" size="small" color="pink"></wd-joystick>
            <div class="">x:{{ testX }}</div>
            <div class="">y:{{ testY }}</div>
            <wd-joystick  v-model:valueX="testX2" v-model:valueY="testY2" size="small" color="blue"></wd-joystick>
            <div class="">x:{{ testX2 }}</div>
            <div class="">y:{{ testY2 }}</div>
        </div>

        <div class="" style="width:300px">
            <p>value:{{ qq }}</p>
            <wd-slidebar @value="(x:string)=>{qq = x}" size="medium" min="0" max="100" type="inner" fill="stripe" color="pink" ></wd-slidebar>
            
            <wd-slidebar size="medium" min="0" max="100" type="inner" fill="gradient" color="blue"></wd-slidebar>
            <wd-slidebar v-model="mm" size="medium" min="0" max="100" type="inner" fill="full" color="blue"></wd-slidebar>
            <p>value:{{ mm }}</p>
        </div>
        <div>
            <wd-switch color="blue" size="tiny"></wd-switch>
            <wd-switch color="red" size='mini'></wd-switch>
            <wd-switch color="pink" size="small"></wd-switch>
            <wd-switch color="black"></wd-switch>
            <wd-switch color="yellow" size="large"></wd-switch>
            <wd-switch size="huge" v-model="op"></wd-switch>
            <p>{{ op }}</p>
        </div>
        <wd-carousel width="500" height="300" round>
            <wd-carousel-img src="/img/cover1.jpeg" alt="1"></wd-carousel-img>
            <wd-carousel-img src="/img/cover2.jpeg" alt="2"></wd-carousel-img>
            <wd-carousel-img src="/img/cover3.jpeg" alt="3"></wd-carousel-img>
            <wd-carousel-img src="/img/cover4.jpeg" alt="4"></wd-carousel-img>
        </wd-carousel>
        
    </div>
    
</template>

<script lang="ts" setup>
import { ref } from 'vue';

function getValue(value:string){
    console.log(value)
}

const radio1 = ref()
const radio2 = ref()

const mm=ref("2")
const qq=ref('')
const op=ref()

const input1 = ref()
const input2 = ref('432523')

const testX = ref(0)
const testY = ref(0)
function a(x:number,y:number,index?:number) {
    testX.value = x
    testY.value = y
}

const testSelect = ref(0)
// function b(x:number,y:number,index?:number) {
//     testX2.value = x
//     testY2.value = y
// }

const testX2 = ref(0)
const testY2 = ref(0)

const checkbox1 = ref()
const checkbox2 = ref()
const checkbox3 = ref()

const slidebarvalue1 = ref()

</script>


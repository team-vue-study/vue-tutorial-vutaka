var app = new Vue({
    el: '#app',
    data: {
        text: '',
        text2: '',
        textarea: '',
        unitCheckbox: true,
        unitCheckbox2: 'yes',
        checkboxValues: ['紅玉', 'ジョナゴールド', '王林', 'ふじ'],
        checkboxChecked: [],
        unitSelect:'',
        selectOptions: [ 
            {label:'紅玉', value:'01'},
            {label:'ジョナゴールド', value:'02'},
            {label:'王林', value:'03'},
            {label:'ふじ', value:'04'}
        ],
        multipleSelect:[],
    },
    methods: {
        updateText2: function(event) {
            this.text2 = event.target.value;
        }
    }
})
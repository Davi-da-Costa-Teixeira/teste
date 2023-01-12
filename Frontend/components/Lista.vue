<template>
    <div>
        <div class="adicionar">
            <span><input type="checkbox"> 1.   kakaak</span>
        </div>
        <div class="adicionar">
            <span><input type="checkbox" class="checkbox"> 2.   kakaak</span>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Lista'
}
</script>

<style>
    div.adicionar{
        padding-left: 10px;
        display: flex;
        justify-content: start;
        align-items: center;  
        border-bottom: solid 1px #a94f82;
        color: white;
        font-size: 22px;
        position: relative;
        margin-left: 1%;
        width: 98%;
        height: 60px;
        background-color: #1c1833;
    }
    div.adicionar:hover{
        transition: 0.2s;
        border: solid 1px #a94f82;
        background-color: #a94f82;
    }
</style>
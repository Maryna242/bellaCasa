<template>
    <div class="w-full max-w-[1440px] my-0 mx-auto">
        <div class="max-w-[1240px] my-0 mx-auto px-[105px]">
            <div class="">
                <div class="flex">
                    <img src="../static/img/photo_2023-06-07_19-31-49.png" alt="photo" width="400px" height="552px" class=" relative">
                    <a href="#" class="play flex w-[115px] h-[115px] items-center border border-[#F8B1AB] bg-[#F8B1AB] rounded-full justify-center absolute right-0">

                    </a>
                </div>
                <div class="">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheHistory'
}
</script>
<style lang="scss">
    .play::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/Polygon.png');
        width: 22.29px;
        height: 26px;
        mask-size: contain;
        background: #FFF;
    }
</style>
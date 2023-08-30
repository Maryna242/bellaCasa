<template>
    <div class="flex items-center flex-col md:flex-row md:items-end md:justify-between">
        <div class=" p-2 md:flex md:flex-col  md:gap-12">
            <h2 class=" max-w-[400px] font-[montserrat] text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#4E4747]">
                Унікальні рішення для вашого інтер’єру
            </h2>
            <NuxtImg src="/img/img_left.webp" width="505px" height="420px" alt="img"/>
        </div>
        <div class=" p-2 flex flex-col">
            <p class="font-fixel text-sm md:text-base font-normal text-[#2B2B2B] w-full max-w-[505px]">
                Bella Casa - одна з лідируючих компаній на українському ринку виробництва дизайнерських штор та 
                унікальних рішень інтер'єру.
                <br><br>
                Наша компанія спеціалізується на виробництві штор на замовлення, а також ми співпрацюємо із відомими 
                українськими дизайнерами.
            </p>
            <div class="flex gap-3 mt-6 ">
                <div>
                    <NuxtImg src="/img/IMG_0978.webp" class="" width="250px" height="370px" alt="img"/>
                </div>
                <div>
                    <NuxtImg src="/img/img_right.webp" class="" width="250px" height="370px" alt="img"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheDescription'
}
</script>
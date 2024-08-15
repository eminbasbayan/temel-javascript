let kitap = {
    baslik: "JavaScript 101",
    yazar: "John Doe",
    yayinYili: 2024,
    bilgiVer: function(){
        console.log(`${this.baslik}, ${this.yazar} tarafından yazılmıştır.`)
    }
}

kitap.bilgiVer();
console.log(kitap.baslik);
console.log(kitap.yazar);
console.log(kitap.yayinYili);
console.log(kitap["yazar"]);
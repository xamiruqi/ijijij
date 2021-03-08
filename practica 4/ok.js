function pract2 (a, b, c) {
    a = parseInt(prompt("Numero uno"));
    b = parseInt(prompt("Numero dos"));
    c  = parseInt(prompt("Numero tres"));

    practica = math.max(a,b,c);
    return practica; 
}
pract2();
document.writeln(practica);
let primero = prompt("primer num ");
parseInt(primero);
let segundo = prompt("segundo num ");
parseInt(segundo);
if (segundo != 0)
{
tercero = primero/segundo;
document.writeln("El resultado es " + tercero);
}
else if(segundo == 0)
{
    document.writeln("no se puede");
}

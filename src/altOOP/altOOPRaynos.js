function Vector2D(x, y) {
    if (!(this instanceof Vector2D)) {
        return new Vector2D(x, y);
    }

    this.x = x;
    this.y = y;
}

Vector2D.prototype.add = function (other) {
    this.x += other.x;
    this.y += other.y;

    return this;
}

Vector2D.prototype.sub = function (other) {
    this.x -= other.x;
    this.y -= other.y;

    return this;
}

Vector2D.add = function (a, b) {
    return new Vector2D(a.x + b.x, a.y + b.y);
}

Vector2D.sub = function (a, b) {
    return new Vector2D(a.x - b.x, a.y - b.y);
}

Vector2DNamed = function(x, y, name) {
    if (!(this instanceof Vector2DNamed)) {
        return new Vector2DNamed(x, y, name);
    }

    this.x = x;
    this.y = y;
    this.name = name;
}

var vec1 = Vector2D(1, 2),
    vec2 = Vector2D(2, 4),
    vec3 = vec1.add(vec2),
    vec4 = vec1.sub(vec2),
    vec5 = Vector2D.add(vec1, vec2),
    vec6 = Vector2D.sub(vec3, vec4);

console.log(Vector2D, vec1, vec2, vec3, vec4, vec5, vec6);
var Vector2D = {
    clone: function (x, y) {
        var instance = Object.create(this);
        instance.x = x;
        instance.y = y;
        return instance;
    },
    add: function (vec1, vec2) {
        return this.clone(vec1.x + vec2.x, vec1.y + vec2.y);
    },
    sub: function(vec1, vec2) {
        return this.clone(vec1.x - vec2.x, vec1.y - vec2.y);
    }
};

var vec1 = Vector2D.clone(1, 2),
    vec2 = Vector2D.clone(2, 4),
    vec3 = vec1.add(vec1, vec2),
    vec4 = vec2.sub(vec1, vec2),
    vec5 = Vector2D.add(vec3, vec4),
    vec6 = Vector2D.sub(vec4, vec5);

console.log(Vector2D, vec1, vec2, vec3, vec4, vec5, vec6);
var Vector2D = {
    construct: function (proto, x, y) {
        var instance = Object.create(this.proto);
        instance.x = x;
        instance.y = y;
        return instance;
    },
    add: function (vec1, vec2) {
        return this.construct(vec1.x + vec2.x, vec1.y + vec2.y);
    },
    sub: function(vec1, vec2) {
        return this.construct(vec1.x - vec2.x, vec1.y - vec2.y);
    },
    proto: {
        add: function (vec) {
            this.x += vec.x;
            this.y += vec.y;

            return this;
        },
        sub: function (vec) {
            this.x -= vec.x;
            this.y -= vec.y;

            return this;
        }
    }
};

var vec1 = Vector2D.construct(1, 2),
    vec2 = Vector2D.construct(2, 4),
    vec3 = vec1.add(vec2),
    vec4 = vec1.sub(vec2),
    vec5 = Vector2D.add(vec1, vec2),
    vec6 = Vector2D.sub(vec3, vec4);

console.log(Vector2D, vec1, vec2, vec3, vec4, vec5, vec6);
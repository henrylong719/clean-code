class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height

    def print_coordinates(self):
        top_right = self.starting_point.x + self.width
        bottom_left = self.starting_point.y + self.height
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    rectangle_origin = Point(50, 100)
    rect = Rectangle(rectangle_origin, 90, 10)

    return rect


rectangle = build_rectangle()

print(rectangle.get_area())
rectangle.print_coordinates()



# class Point:
#     def __init__(self, coordX, coordY):
#         self.coordX = coordX
#         self.coordY = coordY


# class Rectangle:
#     def __init__(self, starting_point, broad, high):
#         self.starting_point = starting_point
#         self.broad = broad
#         self.high = high

#     def area(self):
#         return self.broad * self.high

#     def end_points(self):
#         top_right = self.starting_point.coordX + self.broad
#         bottom_left = self.starting_point.coordY + self.high
#         print('Starting Point (X)): ' + str(self.starting_point.coordX))
#         print('Starting Point (Y)): ' + str(self.starting_point.coordY))
#         print('End Point X-Axis (Top Right): ' + str(top_right))
#         print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


# def build_stuff():
#     main_point = Point(50, 100)
#     rect = Rectangle(main_point, 90, 10)

#     return rect


# my_rect = build_stuff()

# print(my_rect.area())
# my_rect.end_points()

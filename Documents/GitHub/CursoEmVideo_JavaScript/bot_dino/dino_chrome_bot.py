import time

from PIL import ImageGrab
import pyautogui

#bg_color = (247, 247, 247)
#dino_color = (83, 83, 83)


def capture_screen():
    screen = ImageGrab.grab()
    return screen


def detect_enemy(screen):
    aux_color = screen.getpixel((10, 10))
    for x in range(10, 11):
        for y in range(10, 11):
            color = screen.getpixel((x, y))
            #print(color, time.clock())
            if color != aux_color:
                return True
            else:
                aux_color = color    

def jump():
    pyautogui.press("up")

print("Start in 3 seconds...")
time.sleep(3)

while True:
    screen = capture_screen()
    if detect_enemy(screen):
        jump()


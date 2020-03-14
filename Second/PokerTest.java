import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PokerTest {
    private static Leetcode lt = new Leetcode();
    @BeforeEach
    void setUp() {
        System.out.println("测试开始");
    }

    @AfterEach
    void tearDown() {
        System.out.println("测试结束");
    }

    @Test
    void checkWinner() {
        assertEquals("White wins", Leetcode.CheckWinner("2H 3D 5S 9C KD", "2C 3H 4S 8C AH"));
        assertEquals("Black wins", Leetcode.CheckWinner("2H 4S 4C 2D 4H", "2S 8S AS QS 3S"));
        assertEquals("Black wins", Leetcode.CheckWinner("2H 3D 5S 9C KD", "2C 3H 4S 8C KH"));
        assertEquals("Tie", Leetcode.CheckWinner("2H 3D 5S 9C KD", "2D 3H 5C 9S KH"));
        assertEquals("Tie", Leetcode.CheckWinner("5H 6D 7S 8C 9D", "5D 6H 7C 8S 9H"));
    }
}
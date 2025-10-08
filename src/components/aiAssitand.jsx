import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/dialog";
import { Button } from "../components/button";
import { Textarea } from "./textarea";
import { Send, Loader2 } from "lucide-react";
import { API } from "../lib/config";
import ImageAi from '../images/imagAi.png'
export function ChatModal({ open, onOpenChange }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`${API}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Хатогӣ рух дод. Лутфан дубора кӯшиш кунед.");
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl  ">
            <img className="w-[35px]" src={ImageAi} alt="" /> <span className="text-[blue]"> AI Ёрдамчӣ</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 flex-1 overflow-hidden">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Саволатонро нависед
            </label>
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Саволатонро нависед..."
              className="min-h-[120px] resize-none"
              disabled={loading}
            />
          </div>

          <Button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            className="w-full hover:opacity-90 transition-opacity"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Intizor boshed...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Пурсидан
              </>
            )}
          </Button>

          {answer && (
            <div className="flex-1 overflow-y-auto bg-secondary/50 rounded-lg p-4 backdrop-blur-sm border border-border">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Ҷавоб:</p>
                <p className="text-foreground leading-relaxed">{answer}</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

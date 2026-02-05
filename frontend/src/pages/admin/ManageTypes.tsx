import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {appointmentsApi} from "@/api";

export default function ManageTypes() {
  const [types, setTypes] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [newType, setNewType] = useState({
    name: "",
    duration_minutes: 30,
    description: "",
  });

  useEffect(() => {
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
    try {
      const data = await appointmentsApi.getAll();
      setTypes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await appointmentsApi.create({
        name: newType.name,
        duration_minutes: newType.duration_minutes,
        description: newType.description,
        is_active: true,
      });
      setNewType({name: "", duration_minutes: 30, description: ""});
      fetchTypes();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await appointmentsApi.delete(id);
      fetchTypes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Appointment Types</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Type</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdd} className="flex gap-4 items-end">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="type-name">Name</Label>
              <Input
                id="type-name"
                value={newType.name}
                onChange={(e) => setNewType({...newType, name: e.target.value})}
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="type-duration">Duration (min)</Label>
              <Input
                id="type-duration"
                type="number"
                value={newType.duration_minutes}
                onChange={(e) =>
                  setNewType({
                    ...newType,
                    duration_minutes: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="type-desc">Description</Label>
              <Input
                id="type-desc"
                value={newType.description}
                onChange={(e) =>
                  setNewType({...newType, description: e.target.value})
                }
              />
            </div>
            <Button type="submit" disabled={loading}>
              Add
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {types.map((type: any) => (
          <Card key={type.id}>
            <CardHeader>
              <CardTitle>{type.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {type.description || "No description"}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {type.duration_minutes} mins
                </span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(type.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

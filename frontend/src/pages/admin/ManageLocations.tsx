import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {locationsApi} from "@/api";
import type {Location} from "@/types";

export default function ManageLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
  });

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const data = await locationsApi.getAll();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await locationsApi.create({
        ...newLocation,
        is_active: true,
      });
      setNewLocation({
        name: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
      });
      fetchLocations();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await locationsApi.delete(id);
      fetchLocations();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Locations</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Location</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="loc-name">Name</Label>
                <Input
                  id="loc-name"
                  value={newLocation.name}
                  onChange={(e) =>
                    setNewLocation({...newLocation, name: e.target.value})
                  }
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="loc-address">Address</Label>
                <Input
                  id="loc-address"
                  value={newLocation.address}
                  onChange={(e) =>
                    setNewLocation({...newLocation, address: e.target.value})
                  }
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="loc-city">City</Label>
                <Input
                  id="loc-city"
                  value={newLocation.city}
                  onChange={(e) =>
                    setNewLocation({...newLocation, city: e.target.value})
                  }
                  required
                />
              </div>
              <div className="grid flex items-end gap-4">
                <div className="grid gap-1.5 flex-1">
                  <Label htmlFor="loc-state">State</Label>
                  <Input
                    id="loc-state"
                    value={newLocation.state}
                    onChange={(e) =>
                      setNewLocation({...newLocation, state: e.target.value})
                    }
                    required
                  />
                </div>
                <div className="grid gap-1.5 flex-1">
                  <Label htmlFor="loc-zip">Zip Code</Label>
                  <Input
                    id="loc-zip"
                    value={newLocation.zip_code}
                    onChange={(e) =>
                      setNewLocation({...newLocation, zip_code: e.target.value})
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <Button type="submit" disabled={loading}>
              Add Location
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc: any) => (
          <Card key={loc.id}>
            <CardHeader>
              <CardTitle>{loc.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{loc.address}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {loc.city}, {loc.state} {loc.zip_code}
              </p>
              <div className="flex justify-end">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(loc.id)}
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
